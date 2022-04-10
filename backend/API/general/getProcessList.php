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
    $p1["id"] = 1;
    $p1["user"] = "sample-user";
    $p1["host"] = "sample-host";
    $p1["database"] = "None";
    $p1["command"] = "sample-deamon";
    $p1["time"] = "sample-time";
    $p1["status"] = "innodb";
    $p1["progress"] = 0.00;
    $p1["sql-query"] = "SOME SQL";
    $result['processList'] = [$p1,$p1,$p1,$p1];
}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Process List";
    $result['sql-response'] = "SOME PROCESS FAIL";
}






require_once "../../common/common_end.php";
?>