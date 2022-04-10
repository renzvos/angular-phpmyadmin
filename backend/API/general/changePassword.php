<?php
require_once "../../common/common_start.php";

$nopassword = $_POST['nopassword'];
$newpassword = $_POST['password'];
$passwordHashing = $_POST['hashing'];


/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/

$response["development"] = true;

$code = mt_rand(0,1);
if($code == 0)
{
    $result['status-code'] = $code;
    $result['message'] = "Password Changed Successfully";
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Invalid Password";
    $result['sql-response'] = "SOME SQL ERROR";
}


require_once "../../common/common_end.php";
?>