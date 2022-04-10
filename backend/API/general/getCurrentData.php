<?php
require_once "../../common/common_start.php";

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/


$response["development"] = true;

$result['questions'] = 3;
$result['connections'] = 10;
$result['processes'] = 2;
$result['traffic-sent'] = 10;
$result['traffic-recieved'] = 15;
$result['system-usage'] = 30;
$result['system-memory'] = 10;
$result['system-swap'] = 120;

require_once "../../common/common_end.php";
?>