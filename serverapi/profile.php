<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



include_once 'objects/profile.php';

// class instance


$profile = new Profile();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);
$goals = array_key_exists("goals", $obj) ? $obj['goals']:'';
$services = array_key_exists("helpPara", $obj) ? $obj['helpPara']:'';
$mentoring_levels = array_key_exists("mentoring", $obj) ? $obj['mentoring']:'';
$contact = array_key_exists("contact", $obj) ? $obj['contact']:'';
$weekTalk = array_key_exists("weekTalk", $obj) ? $obj['weekTalk']:'';
$availability = array_key_exists("availability", $obj) ? $obj['availability']:'';
$areaofexp = array_key_exists("experiencePara", $obj) ? $obj['experiencePara']:'';
$experience = array_key_exists("expertisePara", $obj) ? $obj['expertisePara']:'';
$fieldofstudy = array_key_exists("studiesPara", $obj) ? $obj['studiesPara']:'';
$highest_education = array_key_exists("education", $obj) ? $obj['education']:'';

$management_tool = array_key_exists("managementTool", $obj) ? $obj['managementTool']:'';

print_r($obj);

/*
// if the form was signup is sent
if($requesttype=="createProfile"){
  $result = $user->saveProfile();
}
elseif($requesttype=="updateProfile"){
//$result = $user->auth();
}
elseif($requesttype=="getProfile"){

}



echo json_encode($profile->resultv);
*/
?>
