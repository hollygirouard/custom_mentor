<?php

// include database connection
include_once '../config/database.php';

class Profile extends database{
  private $table_name = "profile";

  // object properties
  public $id;
  public $goals;//What areas do you want to mentor?
  public $service;//Explain how you can help
  public $email;
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

}
