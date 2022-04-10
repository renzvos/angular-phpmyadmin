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
    $max_concurrent_connections['total'] = "1";
    $max_concurrent_connections['per-hour'] = "2";
    $max_concurrent_connections['percentage'] = "16";
    $failed_attempts['total'] = "1";
    $failed_attempts['per-hour'] = "2";
    $failed_attempts['percentage'] = "16";
    $aborted['total'] = "1";
    $aborted['per-hour'] = "2";
    $aborted['percentage'] = "16";
    $total['total'] = "1";
    $total['per-hour'] = "2";
    $total['percentage'] = "16";

    $result['max-concurrent-connections'] = $max_concurrent_connections;
    $result['faield-attempts'] = $failed_attempts;
    $result['aborted'] = $aborted;
    $result['total'] = $total;

}
else if($code == 1)
{
    $result['status-code'] = $code;
    $result['message'] = "Couldnt find Connection Data";
    $result['sql-response'] = "SOME Connection FAIL";
}


require_once "../../common/common_end.php";
?>