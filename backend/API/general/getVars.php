<?php
require_once "../../common/common_start.php";

$filterword = $_GET['filterword'];


/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/


$response["development"] = true;

$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    
$result["all-vars-table"] = [];
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Variables";
    $result['sql-response'] = "SOME VARIABLE FAIL";
}




require_once "../../common/common_end.php";
?>