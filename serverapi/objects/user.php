<?php

// include database connection
require_once 'config/database.php';

class User extends database{

    // database connection and table name

    private $user_table = "users";
    private $avaliability_table = "avalability";
    private $contact_table = "contact_method";
    private $goals_table = "goals";

    public $profile_table="profile";

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
        $this->setTableName($this->user_table);
        $this->resultv["response"]="failed";
        $this->resultv["error"]="";

    }

    public function setTableName($table){
      $this->user_table=$table;
    }
    public function getTableName(){
      return $this->user_table;
    }

    public function getUserDetails(){

        $useremail=$this->email;
        try {
          $query = "SELECT *  FROM ".$this->user_table." u INNER JOIN ". $this->profile_table. " p ON u.id=p.fk_id  WHERE u.email=:email";
          $stmt = $this->conn->prepare($query);
          $stmt->bindParam(':email', $useremail);

          $stmt->execute();


          $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
          unset($this->resultv['type']);
          unset($this->resultv['email']);
          unset($results[0]['id']);
          unset($results[0]['password']);
          unset($results[0]['profile_id']);
          unset($results[0]['fk_id']);
          $results[0]['goals']=unserialize($results[0]['goals']);
          $results[0]['contact']=unserialize($results[0]['contact']);
          $results[0]['avialability']=unserialize($results[0]['avialability']);

          $this->resultv['user_details']=$results[0];
        }catch(PDOException $exception){
            die('ERROR: ' . $exception->getMessage());
        }

    }
    public function auth() {
        try {
            $query = "SELECT type,id, email, password
                FROM " . $this->user_table . "
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
                  //  $this->resultv["type"]=$result->type;
                    $this->resultv["email"]=$result->email;

                    setcookie('useremail', $this->email, time() + (86400 * 30), "/");
                    $this->getUserDetails();
                }
            }


        } catch(PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function create(){
        try{

            $query = "SELECT id
                FROM " . $this->user_table . "
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
                $query = "INSERT INTO ".$this->user_table."(name,email,password,phone,type)VALUES(:name, :email, :password, :phone, :type)";
                $profile = "INSERT INTO ".$this->profile_table."(fk_id)VALUES(:id)";
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
                   $stmt = $this->conn->prepare($profile);
                   $lastid=$this->conn->lastInsertId();
                   $stmt->bindParam(':id', $lastid);
                   if($stmt->execute()){
                     $this->resultv["response"]="success";
                   }else{$this->resultv["error"]= $this->conn->errorInfo();}


                 }else{
                  $this->resultv["error"]= $this->conn->errorInfo();

                 }
            }
        }
        catch(PDOException $exception){
            die('ERROR: ' . $exception->getMessage());
        }
    }

    public function search_mentor($name ,$goals, $contact, $availability, $edulevel,$mentorlevel){
      //generating query'
      $nameq = $name!=""?"and name='$name'":"";
      $user_query="SELECT id,name,email,phone
          FROM " . $this->user_table . "
          WHERE type = 'Mentor' $nameq";
//if user search based on mentor level and education level
      if($mentorlevel!="" && $edulevel!=""){$profile_query="SELECT * FROM  ".$this->profile_table." WHERE education='$edulevel' and mentoring_level='$mentorlevel'";}
          elseif($mentorlevel=="" && $edulevel!=""){$profile_query="SELECT * FROM  ".$this->profile_table." WHERE education='$edulevel'";}
          elseif($mentorlevel=="" && $edulevel!=""){$profile_query="SELECT * FROM  ".$this->profile_table." WHERE education='$edulevel' ";}
          elseif($mentorlevel!="" && $edulevel==""){$profile_query="SELECT * FROM  ".$this->profile_table." WHERE mentoring_level='$mentorlevel'";}
            else{$profile_query="SELECT * FROM  ".$this->profile_table."";}

      $availibility_query=$this->generate_search_query($availability,$this->avaliability_table,'av_day');
      $contact_query=$this->generate_search_query($contact,$this->contact_table,'contact_type');
        $goals_query=$this->generate_search_query($goals,$this->goals_table,'goals');
$join_query="SELECT u.name,u.email,u.phone,gl.goals,p.service,p.mentoring_level,p.education,av.av_day,av.av_time,cm.contact_type FROM ($user_query) as u join ($profile_query) as p on u.id=p.user_fk
            join ($availibility_query) as av on u.id=av.user_fk
            join ($contact_query)as cm on u.id=cm.user_fk
            join ($goals_query)as gl on u.id=gl.user_fk";

$stmt = $this->conn->prepare($join_query);
$stmt->execute();
$results=$stmt->fetchAll(PDO::FETCH_OBJ);

  //  $result = $results[0];
    $this->resultv["count"]= count($results);
    $this->resultv["response"]= $results;
    

    }


    public function update(){

        $query = "UPDATE ".$this->user_table." SET password=:password  WHERE id=:id";

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
       return 'notset';
     }


   }

      public function logout()
   {
        setcookie("useremail", "", time() - 3600);
        return true;
   }
   //this is a utitlity function to help generate the search filter queries
   private function generate_search_query($string,$tbname,$column){
     if($string!=''){
       //convert to an array
     $string=explode(',',$string);
     $query_array=array();
     foreach ($string as $key => $value) {
       if($key==0){$query_array[]=" $tbname.$column='$value' ";}
       else{
       $query_array[]="or  $tbname.$column= '$value' ";}
     }
     $query_string=implode('',$query_array);
//this is used only to get the time for availability
     $time= $tbname==$this->avaliability_table ?', GROUP_CONCAT(av_time) as av_time':'';

     $query="SELECT user_fk, GROUP_CONCAT($column) as $column $time FROM   ".$tbname." WHERE $query_string group by user_fk";

   }else{$query="SELECT user_fk, GROUP_CONCAT($column) as $column FROM   $tbname group by user_fk";}
return $query;
   }
}
