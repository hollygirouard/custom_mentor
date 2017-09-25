<?php
class User{

    // database connection and table name
    private $conn;
    private $table_name = "users";

    // object properties
    public $id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $type;

    public function __construct($db){
        $this->conn = $db;
    }

    public function auth() {
        try {
            $query = "SELECT id, email, password
                FROM " . $this->table_name . "
                WHERE email = :email";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            $email=htmlspecialchars(strip_tags($this->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            $user = false;
            $results=$stmt->fetchAll(PDO::FETCH_OBJ);
            if(count($results) > 0) {
                $result = $results[0];
                if(password_verify($this->password, $result->password)) {
                    session_start();
                    $user = true;
                    $_SESSION['id'] = $user->id;
                    $_SESSION['email'] = $user->email;
                }
            }

            return $user;
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

            if(count($results) > 0) {
                return 'Your email has been registered. Please pick another email.';
            } else {
                // insert query
                $query = "INSERT INTO users(name,email,password,phone,type)VALUES(:name, :email, :password, :phone, :type)";

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
                     return 'success';
                 }else{
                    return $this->conn->errorInfo();
                 }
            }
        }
        catch(PDOException $exception){
            die('ERROR: ' . $exception->getMessage());
        }
    }


    public function update(){

        $query = "UPDATE users SET password=:password  WHERE id=:id";

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
       return (isset($_SESSION['email']) && isset($_SESSION['id']));

   }

      public function logout()
   {
        session_destroy();
        unset($_SESSION['email']);
        unset($_SESSION['id']);
        return true;
   }
}
