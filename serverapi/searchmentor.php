<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



require_once 'objects/user.php';

// class instance

$user = new User();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);
$name = $obj['name'];
$availability = $obj['availability'];
$contact = $obj['contact'];
$edulevel = $obj['edulevel'];
$goals = $obj['goals'];
$mentorlevel =$obj['mentorlevel'];


// if the form was signup is sent
if($requesttype=="SearchMentor"){
$result=$user->search_mentor($name,$goals, $contact, $availability, $edulevel,$mentorlevel);
echo json_encode($user->resultv);
}


//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}


?>
