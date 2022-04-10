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
    $sqluser['username'] = "test-username";
    $sqluser['host-name'] = "test-hostname";
    $sqluser['password'] = "No";
    $sqluser['global-privilages'] = "USAGE";
    $sqluser['grant'] = "No";
    $result['users'] = [$sqluser,$sqluser,$sqluser,$sqluser];


}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Users";
    $result['sql-response'] = "SOME Users FAIL";
}



$response["development"] = true;





require_once "../../common/common_end.php";
?>