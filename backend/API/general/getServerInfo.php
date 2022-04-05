<?php
require_once "../../common/common_start.php";



$result = $backend->Server->getServerInfo();





$response["development"] = false;

require_once "../../common/common_end.php";
?>