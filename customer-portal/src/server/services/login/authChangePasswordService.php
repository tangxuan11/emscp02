<?php

//------------------------------------------------------------------------------
//
//  AuthReset.php
//
//  This REST accepts the login request and authenticate the user
//
//  If successful, this service returns HTTP status code in the 2XX range.
//
//  If an error occurs, this service returns an HTTP status code in the 4XX
//  (client error) range or 5XX (server error) range and an HTTP body containing
//  a JSON-encoded error object of the following form:
//
//    {"<action>":"<code>"}
//
//  The <action> element is one of:
//
//    error          If appropriate, the client should display an error dialog
//                   to the user.
//
//  The <code> element is a short string indicating the type of error that has
//  occurred. The client should map this to a language-localized error message
//  when displaying it to the user:
//
//    ErrorString       Specific error string to be displayed on the client
//
//------------------------------------------------------------------------------

require_once '/usr/vob/mp/emh/ui/server/lib/RestService.php';
require_once '/usr/vob/mp/emh/ui/server/lib/EmsWebLib.php';
require_once '/usr/vob/mp/emh/ui/server/lib/Panels.php';
require_once "/usr/vob/mp/common/ui/lib/PHPSession.php";
require_once '/usr/vob/mp/common/ui/lib/Authenticator.php';
require_once '/usr/vob/mp/emh/ui/server/lib/EnterpriseUserService.php';
require_once '/usr/vob/mp/emh/ui/server/services/userAuth/AuthValidator.php';

// Define a filter definition array to sanitize the parameters
$acceptAnythingRegEx = '/.*/';

$filterDef = array (
   "wlUsr"               => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx)),
   "wlPwd"               => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx)),
   "wlNewPwd"               => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx)),
   "wlConfPwd"               => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx)),
   "wlPasswordChange"    => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx)),
   "wlSubmitPasswordChange"    => array (
      "filter"           => FILTER_VALIDATE_REGEXP,
      "options"          => array ("regexp" => $acceptAnythingRegEx))
);

//------------------------------------------------------------------------------
//  Define a function to validate the POST request.

$valFcn = function (RestService $svcObj)
{
   // Check if the required parameters are in the body of the post
   $missing = AuthValidator::Instance()->ValidatePasswordReset($svcObj);
   if ($missing != RestService::StatusCodeSuccess)
   {
      return $missing;
   }

   //  Request is valid. Return success.
   return RestService::StatusCodeSuccess;
};

//------------------------------------------------------------------------------
$actFcn = function (RestService $svcObj)
{
   $rv=[];
   $rv["result"] = "success";
   $rv["severity"] = "INFO";
   $rv["statusMsg"] = Authenticator::Instance()->SubmitPasswordChange();
    
   header ("Content-type: application/json");
   echo (json_encode ($rv) . "\n");
   PHPSession::Instance ()->EndSession ();
   return RestService::StatusCodeSuccess;
};
//------------------------------------------------------------------------------
$svcName = basename (__FILE__);
$requiresTransaction = true;
$RequiresAuthentication = false;
$restSvc = new RestService ($svcName, RestService::GET, $filterDef,
   $valFcn, $actFcn, $requiresTransaction, $RequiresAuthentication);
$restSvc->Run ();

//------------------------------------------------------------------------------

?>
