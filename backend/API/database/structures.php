<?php
require_once "../../common/common_start.php";

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/



$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    $db1['name'] = "sample-db";
    $db1['rows'] = 22;
    $db1['type'] = "InnoSample";
    $db1['collation'] = "sample-collation";
    $db1['overhead'] = "-";
    
    $result['structures'] = [$db1,$db1,$db1,$db1];
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Database List";
    $result['sql-response'] = "SOME DATABASE GET FAIL";
}



$response["development"] = true;

require_once "../../common/common_end.php";
?>