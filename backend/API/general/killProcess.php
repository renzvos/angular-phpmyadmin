<?php
require_once "../../common/common_start.php";

$processId = $_POST['processId'];

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/


$response["development"] = true;

$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    $result['message'] = "Process Killed sucessfully";
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt Kill Process";
    $result['sql-response'] = "SOME KILLING FAIL ";
}




require_once "../../common/common_end.php";
?>