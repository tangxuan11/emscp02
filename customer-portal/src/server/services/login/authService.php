<?php

//------------------------------------------------------------------------------
//
//  AuthService.php
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
require_once '/usr/vob/mp/common/ui/lib/Authenticator.php';

require_once  '/usr/vob/mp/emh/ui/server/db/OperatorDomainUser.php';
require_once  '/usr/vob/mp/emh/ui/server/db/OperatorDomainUserGraphs.php';
require_once  '/usr/vob/mp/emh/ui/server/db/OperatorSubdom.php';
require_once  '/usr/vob/mp/emh/ui/server/db/OperatorDom.php';
require_once  '/usr/vob/mp/emh/ui/server/db/UserProfile.php';
require_once '/usr/vob/mp/emh/ui/server/lib/EnterpriseUserService.php';
require_once "/usr/vob/mp/emh/ui/server/lib/UserGraphsService.php";

require_once '/usr/vob/mp/emh/ui/server/services/userAuth/AuthValidator.php';

$acceptAnythingRegEx = '/.*/';

$filterDef = array (
   "wlUsr"               => array (
      "filter"             => FILTER_VALIDATE_REGEXP,
      "options"            => array ("regexp" => $acceptAnythingRegEx)),
   "wlPwd"               => array (
      "filter"             => FILTER_VALIDATE_REGEXP,
      "options"            => array ("regexp" => $acceptAnythingRegEx)),
   "wlFormat"               => array (
      "filter"             => FILTER_VALIDATE_REGEXP,
      "options"            => array ("regexp" => $acceptAnythingRegEx)), 
    "wlLogin"               => array (
      "filter"             => FILTER_VALIDATE_REGEXP,
      "options"            => array ("regexp" => $acceptAnythingRegEx)),      
);

//------------------------------------------------------------------------------
//  Define a function to validate the POST request.

$valFcn = function (RestService $svcObj)
{      
   $missing = AuthValidator::Instance()->ValidateLogin($svcObj);
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
   $rv = Authenticator::Instance()->Authenticate();
   
   // Check if the return value is good
   // If it is get other data required for our portal

   if ($rv["result"] == "success")
   {
      // Load the users profile after successful authentication
      Authenticator::Instance()->LoadUserProfile();
      
      $user =  Authenticator::Instance()->GetUser();
      $userId =  Authenticator::Instance()->GetUsrID();
      
      if (UserGraphsService::Instance()->UserEntryExists($userId) == false)
      {
         // If this is the first time the user created via the admin portal 
         // is authenticating with the enterprise portal, then there is no 
         // default user graphs entry present
         // In that case - create a default entry for the user
         UserGraphsService::Instance()->InsertDefaultUserGraph($userId);
      }
      
      $domain = Authenticator::Instance()->GetDomain();
      $rv["session_id"] = session_id();
      $fullName = Authenticator::Instance()->GetFullName();
      if (strlen(trim($fullName)) == 0)
      {
         $fullName = $user;
      }

      $ret_data['username'] = $fullName;
      
      $ret_data['panels'] = Authenticator::Instance()->GetAccessiblePanels();
      $ret_data['roles'] = Authenticator::Instance()->GetUserRoles();
      if (in_array ("EMH SURVEY", $ret_data['roles']))
      {
         $ret_data['panels'] = array("Survey"); 
      }
      $dashboard_templates = GetDashboardTemplates($userId,$domain);
      if ($dashboard_templates != NULL)
      {
         $ret_data['dashboard_templates'] = $dashboard_templates;
      }
      else
      {
         $ret_data['dashboard_templates'] = [];
      }  
     
      $user_profile = GetUserProfile($userId);
      if ($user_profile != NULL)
      {
         $ret_data['profile'] = $user_profile;
      }
      else
      {
         $ret_data['profile'] = [];
      }
      $ret_data['lastloginmsg'] = FormatLastLoginMessage();
      $ret_data['passwordExpirationWarning'] = $_SESSION["wlPasswdExpWarning"];
      $rv["data"] = $ret_data;

   }

   else
   {
      $rv["result"] = "failure";
      if (!isset($rv["statusMsg"]))
      {
         // Only set the status message if it's not set by the authentiation
         // library for the failure case
         $rv["statusMsg"] = "Login failed. Please try again!"; 
      }     
   }

   header ("Content-type: application/json");
   echo (json_encode ($rv) . "\n");

   return RestService::StatusCodeSuccess;
};

//------------------------------------------------------------------------------
function FormatLastLoginMessage()
{
   $lastLoginMessage = $_SESSION["wlLastLoginMsg"];
   if (strlen($lastLoginMessage) > 0)
   {
      // Explode on <br/> tag
      $msgArray = explode("<br/>",$lastLoginMessage);
      $lastLoginMessage = "";
      foreach($msgArray as $msg)
      {
         if (strpos($msg, 'failed') !== false)
            $lastLoginMessage .=  $msg . ". ";
      }
      $lastLoginMessage = trim($lastLoginMessage, ". ");
   }
   
   return $lastLoginMessage;
}
//------------------------------------------------------------------------------
function GetDashboardTemplates($userId, $domain)
{
    return EnterpriseUserService::Instance()->GetEnterpriseDashTemplates($userId,
                                                                         $domain);


}

//------------------------------------------------------------------------------
function GetUserProfile($userId)
{
   $profileDB = new UserProfile();
   $where = ["USERID" => $userId];
   $profileRows = $profileDB->get(NULL, $where);
   if ($profileRows === NULL)
   {
      return NULL;
   }
   else
   {
      if (count($profileRows) > 0)
      {
         $profileArray = $profileRows[0];
         return $profileArray;
      }
      else
      {
         return NULL;
      }

   }
}

//------------------------------------------------------------------------------
$svcName = basename (__FILE__);
$requiresTransaction = true;
$RequiresAuthentication = false;
$restSvc = new RestService ($svcName, RestService::GET, $filterDef,
   $valFcn, $actFcn, $requiresTransaction, $RequiresAuthentication);
$restSvc->Run ();

//------------------------------------------------------------------------------

?>
