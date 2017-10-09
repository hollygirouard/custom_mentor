<?php

// include database connection
include_once 'config/database.php';

class User extends database{

    // database connection and table name

    private $table_name = "users";

    // object properties
    public $id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $type;
    public $resultv=array();



    public function __construct(){
        parent::__construct();
        $this->setTableName($this->table_name);
        $this->resultv["response"]="failed";
        $this->resultv["error"]="";

    }

    public function setTableName($table){
      $this->table_name=$table;
    }
    public function getTableName(){
      return $this->table_name;
    }


    public function auth() {
        try {
            $query = "SELECT type,id, email, password
                FROM " . $this->table_name . "
                WHERE email = :email";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            $email=htmlspecialchars(strip_tags($this->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $this->resultv["type"]=$this->type;
            $this->resultv["error"]="Wrong email and password Combination";
            $results=$stmt->fetchAll(PDO::FETCH_OBJ);
            if(count($results) > 0) {
                $result = $results[0];
                if(password_verify($this->password, $result->password)) {

                    $this->resultv["response"]="success";
                    $this->resultv["error"]="";
                    $this->resultv["type"]=$result->type;
                    $this->resultv["email"]=$result->email;

                    setcookie('useremail', $this->email, time() + (86400 * 30), "/");
                }
            }


        } catch(PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function create(){
        try{

            $query = "SELECT id
                FROM " . $this->table_name . "
                WHERE email = :email";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            $email=htmlspecialchars(strip_tags($this->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            $user = null;
            $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
            $this->resultv["type"]=$this->type;
            if(count($results) > 0) {
                $this->resultv["error"]= 'Your email has been registered. Please pick another email.';
            } else {
                // insert query
                $query = "INSERT INTO ".$this->table_name."(name,email,password,phone,type)VALUES(:name, :email, :password, :phone, :type)";

                // prepare query for execution
                $stmt = $this->conn->prepare($query);

                // sanitize
                $name=htmlspecialchars(strip_tags($this->name));
                $email=htmlspecialchars(strip_tags($this->email));
                $password=htmlspecialchars(strip_tags($this->password));
                $salted_password = password_hash($password, PASSWORD_BCRYPT);
                $phone=htmlspecialchars(strip_tags($this->phone));
                $type=htmlspecialchars(strip_tags($this->type));


                // bind the parameters
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':phone', $phone);
                $stmt->bindParam(':type', $type);
                $stmt->bindParam(':password', $salted_password);



                // Execute the query
                 if($stmt->execute()){
                   $this->resultv["response"]="success";

                 }else{
                  $this->resultv["error"]= $this->conn->errorInfo();

                 }
            }
        }
        catch(PDOException $exception){
            die('ERROR: ' . $exception->getMessage());
        }
    }


    public function update(){

        $query = "UPDATE ".$this->table_name." SET password=:password  WHERE id=:id";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        // sanitize
        $password=htmlspecialchars(strip_tags($this->password));

        // bind the parameters
        $stmt->bindParam(':password', $password);

        // execute the query
      return ($stmt->execute());
    }

    public function is_loggedin()
   {
     if(isset($_COOKIE["useremail"])){
       return $_COOKIE["useremail"];
     }else{
       return false;
     }


   }

      public function logout()
   {
        setcookie("useremail", "", time() - 3600);
        return true;
   }
}
