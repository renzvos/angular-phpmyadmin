<?php
require_once "../../common/common_start.php";


$databaseName = $_POST['databaseName'];

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/

$response["development"] = true;

$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    $result['message'] = "Database Created Successfully";
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Database Creation Failed";
    $result['sql-response'] = "SOME DATABASE FAIL";
}


require_once "../../common/common_end.php";
?>