<?php

// include database connection
include_once '../config/database.php';

class Profile extends database{
  private $table_name = "users";

  // object properties
  public $id;
  public $name;
  public $phone;
  public $email;
  public $password;
  public $type;
  public $resultv=array();

}
