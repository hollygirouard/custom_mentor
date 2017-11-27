<?php 

require_once('config/database.php');

class Blog extends database {

	private $blog_table = 'blogs';

	public $content;
	public $creator; //should be the Foreign key of a user

}

?>