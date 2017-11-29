<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



require_once 'objects/user.php';

// class instance

$user = new User();
$requesttype=$_POST['requesttype'];
$obj = json_decode($_POST['data'],true);


// if the form was signup is sent
if($requesttype=="SearchMentor"){
echo "hahahaha"
}


//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}


?>
