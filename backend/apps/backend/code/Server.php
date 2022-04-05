<?php

class Server{

    function __construct($conn)
    {
        $this->conn = $conn;
    }

    function getConnectionCollation()
    {
        $sql = "SELECT @@collation_connection;";
        $result = $this->conn->RawSQL($sql);
        return $result[0]['@@collation_connection'];
    }

    function setConnectionCollation()
    {

    }

    function getServerInfo()
    {
        $response['database'] = $this->conn->DatabaseInfo();
        $response['web'] ['software'] =  $_SERVER["SERVER_SOFTWARE"];
        $response['web'] ['php'] = phpversion();
        return $response;

    }

    
    function getProcess()
    {}


    function kilProcess($id)
    {}

    function getVars()
    {}

    function getCharsets()
    {}

    function getEngines()
    {}

    function getPlugins()
    {}


    function CheckForTimeZoneDIfferenceInServer(){
        $result = $this->conn->RawSQL("SELECT CURRENT_TIMESTAMP");
        $date_time = new DateTime( $result[0]['CURRENT_TIMESTAMP']);
        $difference = date_diff(new DateTime(), $date_time);
        $minutes = $difference->i;
        if($minutes >= 1)
        {return false;}else{return true;}}



}

?>