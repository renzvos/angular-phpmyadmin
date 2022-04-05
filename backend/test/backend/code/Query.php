<?php
class Query
{

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function GetTable($table,$wheresql,$limit)
	{	$sql = "SELECT * FROM ".$table;
		if($wheresql != ""){ $sql = $sql." WHERE ".$wheresql;}
		if($limit != 0 || $limit != false){ $sql = $sql." LIMIT ".$limit;}
		$result = $this->conn->RawSQL($sql);
		return $result;
    }

    function GetTableCount($table,$col)
	{$sql = "SELECT COUNT(".$col.") AS count FROM ".$table;
	$result = $this->conn->RawSQL($sql); return $result[0]['count'];}
			
	function Insert($table, $col,$val) {	
    $sql = "INSERT INTO ".$table."(".$col.") VALUES (".$val.")";
	$result = $this->conn->RawSQL($sql);
	$sql;return $result;}
	

	function GetDisticntRow($table,$row)
	{	$sql = "SELECT DISTINCT `".$row."` FROM `".$table."`";
		$result = $this->conn->
        RawSQL($sql);
		return $result;}


		

}

?>