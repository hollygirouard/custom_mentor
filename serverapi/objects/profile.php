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
  private $user_table;


  public function __construct(){
      parent::__construct();
      $this->user_table = $this->getTableName();
  }

  public function saveProfile(){
  try{
    //get email cookie
    $useremail=$this->is_loggedin();//'test1@test1.com';
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
          $profile="INSERT INTO ".$this->profile_table."(service,mentoring_level,weektalk,areaofexp,experience,fieldofstudy,education,managementool,addition_degrees)
          VALUES(:services, :mentoring_level, :weektalk, :areaofexp, :experience, :fieldofstudy, :education, :managementool, :addition_degrees)";

          //loop through availability array to generate query_array
          $availability_array=array();
          $contact_array=array();
          $goals_array=array();
          $first=0;
          foreach ($this->availability as $key => $value) {
            //format for multiple insert :('day','strttime-endtime'),('day','strttime-endtime'),('day','strttime-endtime')
            $time=array_key_exists("start", $value) && array_key_exists("end", $value)?$value['start']." - ".$value['start']:'';
            if($first==0){
                $availability_array[]="('$key','$time')";
            }else{
              $availability_array[]=",('$key','$time')";
            }
            $first++;
          }


          $availability_string=implode(',',$availability_array);
          $contact_string=$this->gen_multi_insert_query($this->contact);
          $goals_string=$this->gen_multi_insert_query($this->goals);
          $availability="INSERT INTO ".$this->avaliability_table."('av_day','av_time') VALUES $availability_string";
          $contact="INSERT INTO ".$this->contact_table."('av_day','av_time') VALUES $availability_string";
          $goals="INSERT INTO ".$this->goals_table."('av_day','av_time') VALUES $availability_string";


          // prepare query for execution
          $stmt = $this->conn->prepare($query);

          // sanitize
          $services=htmlspecialchars(strip_tags($this->services));
          $areaofexp=htmlspecialchars(strip_tags($this->areaofexp));
          $experience=htmlspecialchars(strip_tags($this->experience));
          $fieldofstudy=htmlspecialchars(strip_tags($this->fieldofstudy));
          $education=htmlspecialchars(strip_tags($this->highest_education));
          $addition_degrees=htmlspecialchars(strip_tags($this->addition_degrees));

          // bind the parameters
          $stmt->bindParam(':id', $id);
          $stmt->bindParam(':goals', $this->goals);
          $stmt->bindParam(':services', $services);
          $stmt->bindParam(':mentoring_level', $this->mentoring_levels);
          $stmt->bindParam(':weekTalk', $this->weekTalk);
          $stmt->bindParam(':contact', $this->contact);
          $stmt->bindParam(':avialability', $this->availability);
          $stmt->bindParam(':areaofexp', $areaofexp);
          $stmt->bindParam(':experience', $experience);
          $stmt->bindParam(':fieldofstudy', $fieldofstudy);
          $stmt->bindParam(':education', $education);
          $stmt->bindParam(':managementool', $this->management_tool);
          $stmt->bindParam(':addition_degrees', $this->addition_degrees);
          // Execute the query
           if($stmt->execute()){
             $this->resultv["response"]="success";

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
private function gen_multi_insert_query($array){
  $array_query=array();
  foreach ($array as $key => $value) {
    //format for multiple insert :('email'),('phone'),('text')

    if($key==0){
        $array_query[]="('$value')";
    }else{
      $array_query[]=",('$value')";
    }

  }
  return implode($array_query);
}

}
