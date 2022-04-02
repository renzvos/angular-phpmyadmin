<?php
require_once "../backend/Environment.php";
require_once "../backend/apps/Backend/code/run.php";

$backend = new Backend();

print_r(get_class_methods($backend));

$prod = new Environment();
$backend->ConnectWithEnvironment($prod);

print_r($backend->test());



?>