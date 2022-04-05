<?php

require_once "../../apps/backend/code/run.php";

$backend = new Backend();

$host = $_GET['host'];
$user = $_SERVER['PHP_AUTH_USER'];
$password = $_SERVER['PHP_AUTH_PW'];

$backend->CustomConnect($host,$user,$password);

?>