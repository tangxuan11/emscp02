<?php

require_once "/usr/vob/mp/common/ui/lib/Constants.php";
require_once "/usr/vob/mp/common/ui/lib/DatabaseLocker.php";
require_once "/usr/vob/mp/common/ui/lib/PDOFactory.php";
require_once "/usr/vob/mp/common/ui/lib/DataConduit.php";
require_once "/usr/vob/mp/common/ui/lib/DCProcessor.php";
require_once "/usr/vob/mp/common/ui/lib/Extractor.php";
require_once "/usr/vob/mp/common/ui/lib/RESTServers.php";
require_once "/usr/vob/mp/common/ui/lib/SQLParser.php";
require_once "/usr/vob/mp/common/ui/lib/StatusCollector.php";
require_once "/usr/vob/mp/common/ui/lib/SysInfoCache.php";
require_once "/usr/vob/mp/common/ui/lib/Utilities.php";
require_once "/usr/vob/mp/common/ui/lib/Where.php";
require_once "/usr/vob/mp/common/ui/lib/Authenticator.php";
require_once "/usr/vob/mp/common/ui/lib/PHPSession.php";
require_once "/usr/vob/mp/common/ui/lib/StatsReader.php";
require_once "/usr/vob/mp/common/ui/lib/Footer.php";
require_once "/usr/vob/mp/common/ui/lib/Navigator.php";
require_once "/usr/vob/mp/common/ui/lib/Banner.php";
require_once "/usr/vob/mp/common/ui/lib/PanelSet.php";

require_once "/usr/vob/mp/common/ui/lib/Statistics.php";

class AnalyticsJSONRESTService
{

   public function __construct ()
   {
   }

   private function GetStartOfDay()
   {
      // Start time calculations for today
      $unixTime = time();

      $timeArray = getdate ($unixTime);

      $adjSec = $timeArray["hours"] * 3600 + $timeArray["minutes"] * 
         60 + $timeArray["seconds"];

      return $unixTime - $adjSec;
   }

   private function GetRegIDs($statGroup, $domainToSubdomainArray = array(),
   $sc)
   {
      PanelSet::Instance ()->Status ("DEBUG", "statGroup is: ". $statGroup);
      //if the user does not have access to campaign panel, do not display
      //campaign graphs
      if( (!Authenticator::Instance()->HasRole("EMH CAMPAIGN MANAGEMENT READ"))
          && (!Authenticator::Instance()->HasRole(
              "EMH CAMPAIGN MANAGEMENT READWRITE"))
          && (!Authenticator::Instance()->HasRole(
              "EMH CAMPAIGN MANAGEMENT READWRITE ONLY")) 
          && ($statGroup == "CAMPAIGNST"))
      {
         $regIDArray = array("DUMMY-REG-ID");
         return array_values($regIDArray);
      }

      //if channel partner with no accounts return DUMMY-REG-ID 
      //otherwise data from all the register ids will be displayed
      if(Authenticator::Instance()->HasRole("EMH CHANNEL PARTNER"))
      {
         if(count($domainToSubdomainArray) == 0)
         {
            $regIDArray = array("DUMMY-REG-ID");
            return array_values($regIDArray);
         }
      }

      $regIDArray = array();
      $where = NULL;
      
      $domainAdmin = Authenticator::Instance()->HasRole(
         "EMH DOMAIN ADMINISTRATOR");


      foreach( $domainToSubdomainArray as $domain => $subdomains )
      {
         $domWhere = "DOMAIN = '" . $domain . "'";
         $subdomWhere = "";
         foreach( $subdomains as $subdomain )
         {
            if($subdomWhere !== "")
            {
               $subdomWhere .= " OR SUBDOMAIN = '" . $subdomain . "'";
            }
            else
            {
               $subdomWhere = " AND ( SUBDOMAIN = '" . $subdomain . "'";
            }
         }
         if($subdomWhere !== "")
         {
            if ($domainAdmin)
            {
               $subdomWhere .= " OR SUBDOMAIN = ' '";
            }
            $subdomWhere .= " )"; 
         }
         if( $where !== NULL )
         {
            $where .= " OR ( " . $domWhere . $subdomWhere . " )";  
         }
         else
         {
            $where = "( " . $domWhere . $subdomWhere . " )";  
         }
      }


      if( ($statGroup == "TRAFST") || ($statGroup == "CONNST")
        ||($statGroup == "TAPST")  || ($statGroup == "SMTPST") 
        ||($statGroup == "HTTPST") || ($statGroup == "DNDST")
        ||($statGroup == "CAMPAIGNST") || ($statGroup == "DLVRYST")
        ||($statGroup == "MMSST") ||($statGroup == "IPPUSHST")
        ||($statGroup == "SIGTRANST") || ($statGroup == "BATCHSMSST")) 
      {
         if( ($statGroup == "TRAFST") || ($statGroup == "CONNST")
             || ($statGroup == "DLVRYST") || ($statGroup == "DNDST"))
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.ESMECFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.SMSCCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.XMLCCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.HTTPCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.SMTPDOMMAPPINGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.CAMPAIGNCFG", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.BATCHSMSCFG", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.SIGTRANSCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);

         }
         else if( $statGroup == "MMSST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.MMSCCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         else if( $statGroup == "IPPUSHST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.IPPUSHCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         else if( $statGroup == "SMTPST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.SMTPDOMMAPPINGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         else if( $statGroup == "HTTPST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.HTTPCFGC", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         else if( $statGroup == "CAMPAIGNST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.CAMPAIGNCFG", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         else if( $statGroup == "SIGTRANST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.SIGTRANSCFG", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }

         else if( $statGroup == "BATCHSMSST" )
         {
            $regIDArray += GetTableContent ("127.0.0.1", "8807",
               Constants::WebUserRO, Constants::WebPassRO,
               "EMH_ConfigurationDatabase.BATCHSMSCFG", "SYSTEM_ID",
               "SYSTEM_ID", $sc,
               $where);
         }
         if( count($regIDArray) === 0 )
         {
            //to prevent the reader from return data for all reg ids 
            $regIDArray = array("DUMMY-REG-ID");
         }

      }
      return array_values($regIDArray);
   }


   public function JSONOut()
   {
      $ivlCnt = 30;
      $ivlSize = 1440;

      $startTimeString = "-30 days";

      if (array_key_exists("s", $_REQUEST))
      {
	 $startTimeString = $_REQUEST["s"];
      }

      $endTimeString = "now";

      if (array_key_exists("e", $_REQUEST))
      {
	 $endTimeString = $_REQUEST["e"];
      }

      $requestedIvlCnt = NULL;
      if (array_key_exists("i", $_REQUEST))
      {
	 $requestedIvlCnt = $_REQUEST["i"];
      }

      $endUnixTime = strtotime ($endTimeString);

      // Start time calculations
      $startUnixTime = strtotime ($startTimeString);

      $maxIntervals = 60;

      $timeArray = getdate ($startUnixTime);
      $endTimeArray = getdate ($endUnixTime);

      $adjSec = $timeArray["seconds"];

      $startUnixTime = $startUnixTime - $adjSec;

      $adjSec = $endTimeArray["seconds"];

      $endUnixTime = $endUnixTime - $adjSec;


      $diff =  ($endUnixTime - $startUnixTime)/60;
      $diffInt = (int) $diff;

      if ($diffInt <= $maxIntervals)
      {
	 $resolution = "1 minute";

	 $ivlSize = 1;
      }
      else if ($diffInt <= ($maxIntervals * 15))
      {
	 $resolution = "15 minutes";
	 $ivlSize = 15;

         // adjust start time
	 $adjSec = (($timeArray["minutes"] % 15) * 60);

	 $startUnixTime = $startUnixTime - $adjSec;

         // adjust end time
         $adjSec = ((15 - ($endTimeArray["minutes"] % 15)) % 15);
         if ($adjSec > 0)
            $adjSec -= 1;

         $adjSec *= 60;

         $endUnixTime += $adjSec;
      }
      else if ($diffInt <= ($maxIntervals * 60))
      {
	 $resolution = "1 hour";
	 $ivlSize = 60;

         // adjust start time
	 $adjSec = ($timeArray["minutes"] * 60);

	 $startUnixTime = $startUnixTime - $adjSec;

         // adjust end time
         $adjSec = ((60 - ($endTimeArray["minutes"] % 60)) % 60);
         if ($adjSec > 0)
            $adjSec -= 1;

         $adjSec *= 60;

         $endUnixTime += $adjSec;
      }
      else
      {
	 $resolution = "1 day";
	 $ivlSize = 1440;


	 $intervalSize = "1440";

	 $adjSec = ($timeArray["hours"] * 3600) + ($timeArray["minutes"] * 60);

	 $startUnixTime = $startUnixTime - $adjSec;

         // adjust end time
         $adjSec = ((24 - ($endTimeArray["hours"] % 24)) % 24);
         if ($adjSec > 0)
            $adjSec -= 1;

         $adjSec *= 3600;

         $endUnixTime += $adjSec;

         $adjSec = ((60 - ($endTimeArray["minutes"] % 60)) % 60);
         if ($adjSec > 0)
            $adjSec -= 1;

         $adjSec *= 60;

         $endUnixTime += $adjSec;
          
      }
      // Include all of the first day
      $startOffset = (int) date("O", $startUnixTime);
      $endOffset = (int) date("O", $endUnixTime);

/*
      // Daylight Saving Time Adjustment
      if ( $startOffset < $endOffset )
      {
	 $startUnixTime = bcsub($startUnixTime, 3600, 0);
      }
      else if ( $startOffset > $nowOffset )
      {
	 $startUnixTime = bcadd($startUnixTime, 3600, 0);
      }
*/

      $diff =  ($endUnixTime - $startUnixTime)/60;
      $diffInt = (int) $diff;

      $ivlCnt = (int) (($diffInt + $ivlSize)/$ivlSize);

      if ($requestedIvlCnt !== NULL)
      {
         $ivlCnt = $requestedIvlCnt;
         $ivlSize = $diffInt;
      }

      //check to make sure we are within the allowed limits
      if ($ivlCnt > $maxIntervals)
      {
         $ivlCnt = $maxIntervals;
      }

      $startTime = UnixTimeToJulian ($startUnixTime);
      $endTime = UnixTimeToJulian ($endUnixTime);

      $debug = array(
         "startTime" => $startTime,
         "startTimeNice" => FormatDate ($startTime, array ("julianToUnix" )),
         "endTime" => $endTime,
         "endTimeNice" => FormatDate ($endTime, array ("julianToUnix" )),
         "ivlCnt" => $ivlCnt,
         "ivlSize" => $ivlSize,
         "resolution" => $resolution );


      //TEMPLATE_NAME: Traffic Summary
      //   GRAPH_NAME: Traffic: SMPP Outbound Message Size

      $templateName = "Dummy-Template";
      $graphName = "Dummy-Graph";

      if (array_key_exists("g", $_REQUEST))
      {
         $graphName = $_REQUEST["g"];
      }

      if (array_key_exists("t", $_REQUEST))
      {
         $templateName = $_REQUEST["t"];
      }

/*
      //check for error
      if($graphName == "undefined")
      {
         echo ("Unsupported graph: " . $graphName);
         return;
      }

      if($templateName == "undefined")
      {
         echo ("Unsupported template: " . $templateName);
         return;
      }
*/

      $options = array("DUMMY-REGID");
      if (array_key_exists("o", $_REQUEST))
      {
         $options = json_decode($_REQUEST["o"], true);
      }

      $optionsType = "regid";
      if (array_key_exists("y", $_REQUEST))
      {
         //regid, domain or subdomain
         $optionsType = $_REQUEST["y"];
      }
     
      $series = GetSeriesByGraph ($templateName, $graphName);
      $tang = $series;

      $templateGraphs = GetGraphsByTemplate ($templateName);

      $statGroup = "Dummy-StatGroup";
      if(isset($templateGraphs[$graphName]["STAT_GROUP"]))
      {
         $statGroup = $templateGraphs[$graphName]["STAT_GROUP"];
      }

      $seriesList = array();

      $hosts = array();
      $sc = PanelSet::Instance ()->GetStatusCollector ();
      $hosts = array_values (GetMateRESTHostnames ($sc));

      foreach ($series as $name => $config)
      {
	 $seriesList[$name] = array(
	    "method" => $config["COMBINE_MTH"],
	    "hosts" => $hosts,
	    "regids" => array(),
	    "registers" => explode(",", $config["REGISTERS"]),
	 );
      } 

      //  Generate <categories> element that describes the categories shown on
      //  the X-axis.

      $cats = array();

      for ($x = 0; $x < $ivlCnt; $x++)
      {
         //  Show exactly $numToShow category names on the X-axis. The first
         //  and last category names will always be shown. Additional category
         //  names will be distributed across the length of the axis.

         $numToShow = 10;

         if ($ivlCnt <= $numToShow)
            $showName = 1;
         else if ($x % ($ivlCnt / ($numToShow - 1)) == 0)
            $showName = 1;
         else if ($x == $ivlCnt - 1)
            $showName = 1;
         else
            $showName = 0;

         //  Append the <category> element to the XML. Include the formatted
         //  timestamp as a "hoverText" attribute so it appears when the user
         //  mouses over the data point.

         $intervalTime = bcmul (1000000, $ivlSize * $x * 60);
         $intervalTime = bcadd ($startTime, $intervalTime, 0);

         $intervalTimeUnix = JulianTimeToUnixTime ($intervalTime);
         $intervalTimeUnix = substr ($intervalTimeUnix, 0, -6);

         if ($ivlSize >= 1440) 
         {
            $fullTime = FormatDate ($intervalTime,
               array ("julianToUnix", "noTime"));
         }
         else
         {
            $fullTime = FormatDate ($intervalTime, array ("julianToUnix" ));
         }


         if ($ivlSize >= 1440) 
         {
            $shortTime = FormatDate ($intervalTime, array ("julianToUnix",
               "noDayName", "noYear", "noTime", "noUTCOffset"));
         }
         else
         {
            $shortTime = FormatDate ($intervalTime, array ("julianToUnix",
               "noDayName", "noYear", "noUTCOffset"));
          }

          $cats["category"][] = array(
             "label" => $shortTime,
             "showLabel" => $showName,
             "toolText" => $fullTime );

      }

      $sc = new StatusCollector();

      // substitute the set of register ids owned by this domain

      $filteredSeriestList = array();

      $domain = Authenticator::Instance()->GetDomain();

      $subdomains = Authenticator::Instance()->GetGroups();
      $domainAdmin = Authenticator::Instance()->HasRole(
         "EMH DOMAIN ADMINISTRATOR");

      $subs = array();

      if((!$domainAdmin) && count($subdomains) >= 1)
      {
         $subs = $subdomains;
      }
      
      //options type: domains
      //channel partner viewing analytics for his/her accounts
      //no visibility of per subdomain data
      if($optionsType == "domain")
      { 
         $accounts = GetTableContent ("127.0.0.1", "8807",
            Constants::WebUserRO, Constants::WebPassRO,
            "EMH_ConfigurationDatabase.OPERATORDOM", NULL,
            "DOMAIN", PanelSet::Instance ()->GetStatusCollector (),
            "OWNER_DOMAIN = '" . $domain . "'");

         foreach( $options as $d )
         {
	    $domainToSubdomainArray = array();

            if( $d == "total" )
            {
               foreach($accounts as $a)
               {
	          $domainToSubdomainArray[$a] = array();
               }
               $regIDs = $this->GetRegIDs($statGroup,
                  $domainToSubdomainArray, $sc);
               //$tang = $statGroup;
               //$tang = $regIDs;
            }
            else
            {
	       $domainToSubdomainArray[$d] = array();

               $regIDs = $this->GetRegIDs($statGroup,
                  $domainToSubdomainArray, $sc);
            }
        
	    foreach ($seriesList as $seriesName => $seriesAttrs)
	    {
	       $seriesAttrs["regids"] = $regIDs;

	       $filteredSeriestList[$seriesName . " (" . $d . ")"] =
                  $seriesAttrs;
            } 
         }
      }
      //options type: subdomain
      //domain user viewing data of his/her subdomains  
      else if( $optionsType == "subdomain" )
      {
         // Total
         if (in_array("total", $options))
         { 
	    $domainToSubdomainArray = array($domain => $subs);

            $regIDs = $this->GetRegIDs($statGroup,
               $domainToSubdomainArray, $sc);

	    foreach ($seriesList as $seriesName => $seriesAttrs)
	    {
	       $seriesAttrs["regids"] = $regIDs;

	       if ( $subs === NULL )
	          $filteredSeriestList[$seriesName] = $seriesAttrs;
	       else
	          $filteredSeriestList[$seriesName . " (Total)"] = $seriesAttrs;
	    }
         }

         $anyDepartmentSelected = false;

         // check if any of the department is being selected
         foreach ($subdomains as $sub)
         {
            if(in_array($sub, $options))
               $anyDepartmentSelected = true;               
         }

         // Sub-Domains
         foreach ($subdomains as $sub)
         {
           $currentDepartmentSelected = true;
           $keywordSelected = false;

           if(!in_array($sub, $options))
           {
               $currentDepartmentSelected = false;
           }

           if(array_key_exists("k", $_REQUEST) && 
               $_REQUEST["k"] == "Per Campaign")
           {
               $keywordSelected = true;
           }

           if($templateName != "Campaign Messages")
           {
               // non campaign graph, skip this department if it is not selected
               if($currentDepartmentSelected == false)
                    continue;
           }
           else // for the campaign graphs, handle differently
           {
               // if this department is not selected, in two cases that it will be skipped
               // 1. any other department is being selected or
               // 2. the keyword is not checked (if Campaign Keyword is selected w/o any department
               //    being selected, will default to display for all the departments

               if($currentDepartmentSelected == false && 
                 ($anyDepartmentSelected == true || $keywordSelected == false )) 
               { 
                  continue;
               }
           }

           $domainToSubdomainArray = array($domain => array($sub));

           $regIDs = $this->GetRegIDs($statGroup,
              $domainToSubdomainArray, $sc);

           foreach ($seriesList as $seriesName => $seriesAttrs)
           {        
	      // non campaign graph, print out with department
              if($templateName != "Campaign Messages")
              {
                 $seriesAttrs["regids"] = $regIDs;
                 $filteredSeriestList[$seriesName . " (" . $sub . ")"] =
	                  $seriesAttrs;
              }
	      // Campaign graphs can be printed out per campaign Keyword
	      else
	      {
                 if(!array_key_exists("k", $_REQUEST))
                 {
                    $seriesAttrs["regids"] = $regIDs;
                    $filteredSeriestList[$seriesName . " (" . $sub . ")"] =
                    	$seriesAttrs;
                 }
                 else if($_REQUEST["k"]== "Per Campaign")
                 {
                    //create one series per keyword
                    foreach( $regIDs as $r )
                    {
                       $seriesAttrs["regids"] = array($r);
                    
                       //campaign regi id is: keyword + ; + subdomain id
                       //update the series name to be keyword: Department
                       $pieces = explode(";", $r);
                       $keyword = $pieces[0];
                       $filteredSeriestList[$seriesName . " (" . $keyword . 
                       	        ":" . $sub . ")"] = $seriesAttrs;
                    }
                 }
	      }            
           }
         }
      }
      //default options type: regids
      //passed in options are regids
      else
      {
         foreach ($seriesList as $seriesName => $seriesAttrs)
	 {
	    $seriesAttrs["regids"] = $options;

	    $filteredSeriestList[$seriesName] = $seriesAttrs;
	 }
      }

      $seriesList = $filteredSeriestList;
      //$tang = $filteredSeriestList;


      $reader = new StatsReader ();

      $intervalsToRead = $ivlCnt;
      //$tang = $sc;

      $seriesData = $reader->Read ($startTime, $ivlSize, $intervalsToRead,
	 $statGroup, $seriesList, $sc);


      $dataset = array();
      foreach ($seriesData as $seriesName => $seriesArray)
      {
         $data = array();

         foreach ($seriesArray as $val)
         {
            $data[] = array("value"=> $val);
         }

         $dataset[] = array(
            "seriesName" => $seriesName,
            "data" => $data
         );
      }

      $y = array(
	    "tang" => $tang,
	    "categories" => $cats,
	    "dataset" => $dataset,
     );
 
      $country = array();
      array_push($country, array("name"=>"United States","traffic"=>"5500","sucessRate"=>"0.98",failureRate=>"0.01",noReceiptRate=>"0.01"));
      array_push($country, array("name"=>"Canada","traffic"=>"5000","sucessRate"=>"0.99",failureRate=>"0.01",noReceiptRate=>"0"));
      array_push($country, array("name"=>"Germany","traffic"=>"4500","sucessRate"=>"0.97",failureRate=>"0.02",noReceiptRate=>"0.01"));
      array_push($country, array("name"=>"Singapore","traffic"=>"4000","sucessRate"=>"1",failureRate=>"0",noReceiptRate=>"0"));
      array_push($country, array("name"=>"India","traffic"=>"3500","sucessRate"=>"0.98",failureRate=>"0.01",noReceiptRate=>"0.01"));

      $country0 = array();

      $sms = array("total"=>"3000","successRate"=>"0.95","country"=>$country);
      $mms = array("total"=>"2000","successRate"=>"0.96","country"=>$country);
      $email = array("total"=>"4000","successRate"=>"0.94","country"=>$country);
      $push = array("total"=>"1000","successRate"=>"0.93","country"=>$country);
      $lookup = array("total"=>"1000","successRate"=>"0.92","country"=>$country);
      $t2s = array("total"=>"0","successRate"=>"0","country"=>$country0);

      $re = array(
            "SMS" => $sms,
            "MMS" => $mms,
            "EMAIL" => $email,
            "PUSH" =>$push,
            "NUMBER LOOKP" => $lookup,
            "TEXT-2-SPEECH" => $t2s
      );


      echo json_encode($re);
   }
}

//Temporarily disable authentication: xtang1
//if (Authenticator::Instance ()->IsUserAuthenticated () == false)
//{
//   echo "not authenticated";
//   exit;
//}

//  Load the user's profile which contains his preferred time zone.

Authenticator::Instance ()->LoadUserProfile ();

$data = new AnalyticsJSONRESTService();

$data->JSONOut();

