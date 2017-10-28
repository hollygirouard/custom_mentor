<?php
//session_start();

class Database{


    public $conn;
    // get the database connection
    public function __construct() {

        $this->conn = null;
// AWS Config

// $this->host = $_SERVER['RDS_HOSTNAME'];
// $this->db_name = $_SERVER['RDS_DB_NAME'];
// $this->username = $_SERVER['RDS_USERNAME'];
// $this->password = $_SERVER['RDS_PASSWORD'];
// $this->port = $_SERVER['RDS_PORT'];

// Development Config

$this->host = 'localhost';
$this->db_name = 'custom_mentor';
$this->username = 'root';
$this->password =  '';
$this->port = '8080';

        

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
