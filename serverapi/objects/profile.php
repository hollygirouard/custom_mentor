<?php

// include database connection
include_once '../config/user.php';

class Profile extends database{
  private $table_name = "profile";

  // object properties
  public $id;
  public $goals;//What areas do you want to mentor?
  public $service;//Explain how you can help
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
      $this->$user_table=$this->getTableName();
  }

  public function saveProfile(){
    //get email cookie
    $useremail=$this->is_loggedin();
    if($useremail!='false'){
      //get the id for user email
      $query = "SELECT id
          FROM " . $this->user_table . "
          WHERE email = :email";

      //prepare query for execution
      $stmt = $this->conn->prepare($query);

      $email=htmlspecialchars(strip_tags($this->email));
      $stmt->bindParam(':email', $useremail);
      $stmt->execute();

      $user = null;
      $results=$stmt->fetchAll(PDO::FETCH_ASSOC);
    }else{
      //attach error
      $this->resultv["response"]="failed";
      $this->resultv["error"]="This User is not Logged In";
    }
  }


}
