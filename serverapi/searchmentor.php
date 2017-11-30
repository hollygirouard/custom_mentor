<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



require_once 'objects/user.php';

// class instance

$user = new User();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);
$name = array_key_exists("name",$obj)?$obj['name']:'';
$availability = array_key_exists("availability",$obj) ?$obj['availability']:'';
$contact = array_key_exists("contact",$obj) ?$obj['contact']:'';
$edulevel = array_key_exists("edulevel",$obj)?$obj['edulevel']:'';
$goals = array_key_exists("goals",$obj) ?$obj['goals']:'';
$mentorlevel = array_key_exists("mentorlevel",$obj)?$obj['mentorlevel']:'';



// if the form was signup is sent
if($requesttype=="SearchMentor" && !empty($obj)){
$result=$user->search_mentor($name,$goals, $contact, $availability, $edulevel,$mentorlevel);
echo json_encode($user->resultv);
}


//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}


?>
