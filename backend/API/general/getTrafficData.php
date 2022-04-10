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
    $result['recieved-total'] = 100;
    $result['recieved-hour'] = 101;
    $result['sent-total'] = 102;
    $result['sent-hour'] = 103;
    $result['traffic-total'] = 104;
    $result['traffic-hour'] = 105;
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Traffic Data";
    $result['sql-response'] = "SOME TRAFFIC FAIL";
}


require_once "../../common/common_end.php";
?>