<?php
require_once "DBController.php";
require_once "Query.php";
require_once "Server.php";
require_once "Status.php";
require_once "UserControl.php";


$Db = new DBController();
class Backend extends DBController{
	

	function __construct()
	{
		
		$this->Query = new Query($this);
		$this->Status = new Status($this);
		$this->UserControl = new UserControl($this);
		$this->Server = new Server($this);
	}

	

}
?>