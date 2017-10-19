<?php
//session_start();
class Database{

    // specify your own database credentials
    private $host = "http://custommentor-env.mbkr62zap6.us-east-2.elasticbeanstalk.com/";
    private $db_name = "custom_mentor";
    private $username = "custommentor";
    private $password = "custommentor";
    public $conn;

    // get the database connection
    function __construct() {

        $this->conn = null;

        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
            $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }

        //return $this->conn;
    }
}
