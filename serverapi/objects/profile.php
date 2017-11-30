<?php

// include database connection
require_once 'objects/user.php';

class Profile extends User{


  // object properties
  public $id;
  public $goals;//What areas do you want to mentor?
  public $services;//Explain how you can help
  public $mentoring_levels;//What levels of mentoring do you wish to particpate
  public $contact;//how would you cantact the mentor
  public $weekTalk;//How often are you willing to communicate per week?
  public $availability;
  public $areaofexp;//In what area(s) do you have expertise? (Separate different areas with a comma.)
  public $experience;//how would you cantact the mentor
  public $fieldofstudy;//What is/was your field of study in school? (Separate different fields with a comma.)
  public $highest_education;//What is your highest education level attained?
  public $addition_degrees;//how would you cantact the mentor
  public $management_tool;
  //private $user_table;


  public function __construct(){
      parent::__construct();
      //$this->user_table = $this->getTableName();
  }

  public function saveProfile(){
  try{
    //get email cookie
  //  $useremail=$this->is_loggedin();//'test1@test1.com';
      $useremail='demo@demo.com';
    if($useremail!='notset'){
      //get the id for user email
      $query = "SELECT id
          FROM " . $this->user_table . "
          WHERE email = :email";

      //prepare query for execution
      $stmt = $this->conn->prepare($query);

      $email=htmlspecialchars(strip_tags($this->email));
      $stmt->bindParam(':email', $useremail);
      $stmt->execute();


      $results=$stmt->fetchAll(PDO::FETCH_ASSOC);

      if(count($results) > 0) {
          $id = $results[0]['id'];
          //decide whether its an update or a new addition
          //insert details into profile Table
          $profile="INSERT INTO ".$this->profile_table."(user_fk,service,mentoring_level,weektalk,areaofexp,experience,fieldofstudy,education,managementool,addition_degrees)
          VALUES(:id, :services, :mentoring_level, :weektalk, :areaofexp, :experience, :fieldofstudy, :education, :managementool, :addition_degrees)";

          //loop through availability array to generate query_array
          $availability_array=array();
          $contact_array=array();
          $goals_array=array();

          foreach ($this->availability as $key => $value) {
            //format for multiple insert :('day','strttime-endtime'),('day','strttime-endtime'),('day','strttime-endtime')
            $time=array_key_exists(0, $value) && array_key_exists(1, $value)?$value[0]." - ".$value[1]:'';

                $availability_array[]="($id,'$key','$time')";

          }


          $availability_string=implode(',',$availability_array);
          $contact_string=$this->gen_multi_insert_query($this->contact,$id);
          $goals_string=$this->gen_multi_insert_query($this->goals,$id);
          $availability="INSERT INTO ".$this->avaliability_table."(user_fk,av_day,av_time) VALUES $availability_string";
          $contact="INSERT INTO ".$this->contact_table."(user_fk,contact_type) VALUES $contact_string";
          $goals="INSERT INTO ".$this->goals_table."(user_fk,goals) VALUES $goals_string";

          //clear table with that id to avoid duplicate
          $this->conn->exec("DELETE FROM ".$this->profile_table." WHERE user_fk=$id; DELETE FROM ".$this->avaliability_table." WHERE user_fk=$id ;DELETE FROM ".$this->contact_table." WHERE user_fk=$id;DELETE FROM ".$this->goals_table." WHERE user_fk=$id");

          // prepare query for execution
          $stmt = $this->conn->prepare($profile);
            $stmt2 = $this->conn->prepare($contact);
              $stmt3 = $this->conn->prepare($goals);
                $stmt4 = $this->conn->prepare($availability);




          // sanitize
          $services=htmlspecialchars(strip_tags($this->services));
          $areaofexp=htmlspecialchars(strip_tags($this->areaofexp));
          $experience=htmlspecialchars(strip_tags($this->experience));
          $fieldofstudy=htmlspecialchars(strip_tags($this->fieldofstudy));
          $education=htmlspecialchars(strip_tags($this->highest_education));
          $addition_degrees=htmlspecialchars(strip_tags($this->addition_degrees));

          // bind the parameters
          $stmt->bindParam(':id', $id);

          $stmt->bindParam(':services', $services);
          $stmt->bindParam(':mentoring_level', $this->mentoring_levels);
          $stmt->bindParam(':weektalk', $this->weekTalk);


          $stmt->bindParam(':areaofexp', $areaofexp);
          $stmt->bindParam(':experience', $experience);
          $stmt->bindParam(':fieldofstudy', $fieldofstudy);
          $stmt->bindParam(':education', $education);
          $stmt->bindParam(':managementool', $this->management_tool);
          $stmt->bindParam(':addition_degrees', $this->addition_degrees);
          // Execute the query
       if($stmt->execute()  && $stmt2->execute() && $stmt3->execute() && $stmt4->execute()){
              //if( $stmt4->execute()){
             $this->resultv["response"]="Success";

           }else{
            $this->resultv["error"]= $this->conn->errorInfo();

           }

    }else{
      $this->resultv["response"]="failed";
      $this->resultv["error"]=$useremail;
    }
  }else{
    //attach error
    $this->resultv["response"]="failed";
    $this->resultv["error"]="This User is not Logged In";
  }
}
  catch(PDOException $exception){
      die('ERROR: ' . $exception->getMessage());
  }

}
private function gen_multi_insert_query($array,$id){
  $array_query=array();
  foreach ($array as $key => $value) {
    //format for multiple insert :('email'),('phone'),('text')


        $array_query[]="($id,'$value')";


  }
  return implode(',',$array_query);
}

}
