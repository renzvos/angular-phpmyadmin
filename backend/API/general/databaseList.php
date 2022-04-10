<?php
require_once "../../common/common_start.php";

/* 
DEVELOPMENT CODE GOES HERE 

$result = $backend->Server->getServerInfo();


*/

$result['databases'] = ['database1','database2','database3']; 

$response["development"] = true;



require_once "../../common/common_end.php";
?>