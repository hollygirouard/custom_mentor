<?php
//session_start();

class Database{


    public $conn;
    // get the database connection
    public function __construct() {

        $this->conn = null;

		$this->host = isset($_SERVER['RDS_HOSTNAME'])?$_SERVER['RDS_HOSTNAME']:"localhost";
		$this->db_name = isset($_SERVER['RDS_DB_NAME']) ? $_SERVER['RDS_DB_NAME'] :"custom_mentor";
		$this->username = isset($_SERVER['RDS_USERNAME']) ? $_SERVER['RDS_USERNAME'] :"root";
		$this->password = isset($_SERVER['RDS_PASSWORD']) ?$_SERVER['RDS_PASSWORD'] :"";
		$this->port = isset($_SERVER['RDS_PORT']) ?$_SERVER['RDS_PORT'] :"8080";


    // Development Config
    // $this->host = 'localhost';
    // $this->db_name = 'custom_mentor';
    // $this->username = 'root';
    // $this->password =  '';
    // $this->port = '8080';


        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        //return $this->conn;
    }
}

?>
