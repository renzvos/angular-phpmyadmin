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
$result['status-code'] = $code;

$overall["total"] = 155;
$overall["per-hour"] = 26;
$overall["per-minute"] = 6;

$select["total"] = 64;
$select["per-hour"] = 12;
$select["pecentage"] = 10;

$set["total"] = 64;
$set["per-hour"] = 12;
$set["pecentage"] = 10;


$show_tables["total"] = 64;
$show_tables["per-hour"] = 12;
$show_tables["pecentage"] = 10;


$change_db["total"] = 64;
$change_db["per-hour"] = 12;
$change_db["pecentage"] = 10;


$show_vars["total"] = 64;
$show_vars["per-hour"] = 12;
$show_vars["pecentage"] = 10;


$show_master_status["total"] = 64;
$show_master_status["per-hour"] = 12;
$show_master_status["pecentage"] = 10;


$show_slave_status["total"] = 64;
$show_slave_status["per-hour"] = 12;
$show_slave_status["pecentage"] = 10;


$show_status["total"] = 64;
$show_status["per-hour"] = 12;
$show_status["pecentage"] = 10;


$show_binlogs["total"] = 64;
$show_binlogs["per-hour"] = 12;
$show_binlogs["pecentage"] = 10;


$show_grants["total"] = 64;
$show_grants["per-hour"] = 12;
$show_grants["pecentage"] = 10;


$show_processlist["total"] = 64;
$show_processlist["per-hour"] = 12;
$show_processlist["pecentage"] = 10;


$result['select'] = $select;
$result['set-options'] = $set;
$result['change-db'] = $change_db;
$result['show-variables'] = $show_vars;
$result['show-master-status'] = $show_master_status;
$result['show-slave-status'] = $show_slave_status;
$result['show-status'] = $show_status;
$result['show_binlogs'] = $show_binlogs;
$result['show_grants'] = $show_grants;
$result['show_processlist'] = $show_processlist;

}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Stat";
    $result['sql-response'] = "SOME Stat FAIL";
}


require_once "../../common/common_end.php";
?>