<?php
class DBController {
    public $isConnected = false;
	private $host;
	private $user;
	private $password;
	private $database;
	private $conn;

    function __construct(){}

    function ConnectWithEnvironment($prod) {
        $this->host = $prod->host;
        $this->user = $prod->user;
        $this->password = $prod->password;
        $this->database = $prod->database;
        $this->conn = $this->connectDB();}


    function CustomConnect($host,$user,$password){
        $this->host = $host;
        $this->user = $user;
        $this->password = $password;
        $this->conn = $this->connectDB();}
	

    function runBaseQuery($query) {
                $result = mysqli_query($this->conn,$query);
                while($row=mysqli_fetch_assoc($result)) {
                $resultset[] = $row;
                }		
                if(!empty($resultset))
                return $resultset;}
    
    
    function runQuery($query, $param_type, $param_value_array) {
        
        $sql = $this->conn->prepare($query);
        $this->bindQueryParams($sql, $param_type, $param_value_array);
        $sql->execute();
        $result = $sql->get_result();
        
        if ($result->num_rows > 0) {
            while($row = $result->fetch_assoc()) {
                $resultset[] = $row;
            }
        }
        
        if(!empty($resultset)) {
            return $resultset;
        } }
    

    
    function insert($query, $param_type, $param_value_array) {
        $sql = $this->conn->prepare($query);
        $this->bindQueryParams($sql, $param_type, $param_value_array);
        $sql->execute();}
    
    function update($query, $param_type, $param_value_array) {
        $sql = $this->conn->prepare($query);
        $this->bindQueryParams($sql, $param_type, $param_value_array);
        $sql->execute();}
	


	function RawSQL($query){
     //echo $query;	
	 $sql = $this->conn->prepare($query);
	 $sql->execute();
     $result = $sql->get_result();
	 if (!$result){return $this->conn->insert_id;} // If no result it might be an insertion of updation returns id
	 else{if ($result->num_rows > 0)  //If it has rows returns rows
     {while($row = $result->fetch_assoc()){$resultset[] = $row;}}// No rows then return whatever we got
	 if(isset($resultset))return $resultset;}  }

    
     



    function DatabaseInfo()
    {
        $response["client_info"] = $this->conn->client_info;
        $response["client_version"] = $this->conn->client_version;
        $response["host_info"] = $this->conn->host_info;
        $response["protocol_version"] = $this->conn->protocol_version;
        $response["server_info"] = $this->conn->server_info;
        $response["server_version"] = $this->conn->server_version;
        $response["charsetObject"] = json_decode(json_encode($this->conn->get_charset()), true); ;
        return $response;

    }


    



 
    

    


    //// PRIVATE FUNCTIONS

	private function connectDB() {
		$conn = new mysqli($this->host,$this->user,$this->password);
        if($conn->connect_errno == 0){$this->isConnected = true;}else{$this->isConnected = false;}
		return $conn;}

    private function bindQueryParams($sql, $param_type, $param_value_array) {
        $param_value_reference[] = & $param_type;
        for($i=0; $i<count($param_value_array); $i++) {
            $param_value_reference[] = & $param_value_array[$i];
        }
        call_user_func_array(array(
            $sql,
            'bind_param'
        ), $param_value_reference);}
	

    


}
?>