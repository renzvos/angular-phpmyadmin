<?php
require_once "../../common/common_start.php";

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/


$response["development"] = true;

$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    $result['day'] = "1";
    $result['hour'] = "2";
    $result['minute'] = "16";
    $result['seconds'] = "25";
    $result['date'] = "04/03/2021";
    $result['time'] = "12:42";
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Uptime";
    $result['sql-response'] = "SOME UPTIME FAIL";
}



require_once "../../common/common_end.php";
?>