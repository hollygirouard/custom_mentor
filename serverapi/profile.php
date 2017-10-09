<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



include_once 'objects/profile.php';

// class instance
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
$profile = new Profile();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);
$user->goals = array_key_exists("name", $obj) ? $obj['name']:'';
$user->phone = array_key_exists("phone", $obj) ? $obj['phone']:'';
$user->email = array_key_exists("email", $obj) ? $obj['email']:'';
$user->password = array_key_exists("password", $obj) ? $obj['password']:'';
$user->type = array_key_exists("type", $obj) ? $obj['type']:'';

// if the form was signup is sent
if($requesttype=="Signup"){
  $result = $user->create();
}
elseif($requesttype=="Signin"){
$result = $user->auth();
}

//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}

echo json_encode($user->resultv);
?>
