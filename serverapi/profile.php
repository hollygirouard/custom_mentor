<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Access-Control-Allow-Methods: GET, POST, PUT');



require_once 'objects/profile.php';

// class instance

$profile                   = new Profile();
$requesttype               = $_POST['requesttype'];
$obj                       = json_decode($_POST['data'], true);
$profile->goals            = array_key_exists("goals", $obj) ? $obj['goals'] : ''; //array
$profile->services         = array_key_exists("helpPara", $obj) ? $obj['helpPara'] : '';
$profile->mentoring_levels = array_key_exists("mentoring", $obj) ? $obj['mentoring'] : '';
$profile->contact          = array_key_exists("contact", $obj) ? $obj['contact'] : ''; //array
$profile->weekTalk         = array_key_exists("weekTalk", $obj) ? $obj['weekTalk'] : '';
$profile->availability     = array_key_exists("availability", $obj) ? $obj['availability'] : ''; //array
$profile->areaofexp        = array_key_exists("experiencePara", $obj) ? $obj['experiencePara'] : '';
$profile->experience       = array_key_exists("expertisePara", $obj) ? $obj['expertisePara'] : '';
$profile->fieldofstudy     = array_key_exists("studiesPara", $obj) ? $obj['studiesPara'] : '';

$profile->highest_education = array_key_exists("education", $obj) ? $obj['education'] : '';
$profile->highest_education = array_key_exists("education", $obj) ? $obj['education'] : '';

$profile->addition_degrees = array_key_exists("additionalDegrees", $obj) ? $obj['additionalDegrees'] : '';


// if the form was signup is sent
if ($requesttype == "createProfile") {
    $result = $profile->saveProfile();
}

echo json_encode($profile->resultv);

?>
