<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');

// include database connection
include_once 'config/database.php';

include_once 'objects/user.php';

// class instance
$database = new Database();
$db = $database->getConnection();
$user = new User($db);
$response = array();

// if the form was signup is sent
if($_POST['Signup']){



        $obj = json_decode($_POST['Signup'],true);
        $user->name = $obj['name'];
        $user->phone = $obj['phone'];
        $user->email = $obj['email'];
        $user->password = $obj['password'];
        $user->type = $obj['type'];
        $result = $user->create();

//sample response :{"response":"failed","error":"Your email has been registered. Please pick another email."}

        if($result!="success"){
          $response["response"]="failed";
          $response["error"]=$result;
        }else{
          $response["response"]="success";
          $response["error"]="";
        }
        echo json_encode($response);
}
