<?php
//User methods
// include database connection
require_once 'config/database.php';

class User extends database
{

    // database connection and table name

    protected $user_table = "users";
    protected $avaliability_table = "avalability";
    protected $contact_table = "contact_method";
    protected $goals_table = "goals";

    protected $profile_table = "profile";

    // object properties
    public $id;
    public $name;
    public $phone;
    public $email;
    public $password;
    public $type;
    public $resultv = array();



    public function __construct()
    {
        parent::__construct();
        $this->setTableName($this->user_table);
        $this->resultv["response"] = "failed";
        $this->resultv["error"]    = "";

    }
    //setters and getter to make table available out side class
    public function setTableName($table)
    {
        $this->user_table = $table;
    }
    public function getTableName()
    {
        return $this->user_table;
    }
    //used to get full details of a user
    public function getUserDetails()
    {
        //based on the email passed during loggin process
        $useremail = $this->email;
        try {
            //generating queries from all tables
            $profile_query = "SELECT * FROM  " . $this->profile_table . "";

            $user_query         = "SELECT * FROM  " . $this->user_table . " WHERE email='$useremail'";
            $availibility_query = $this->generate_search_query('', $this->avaliability_table, 'av_day');
            $contact_query      = $this->generate_search_query('', $this->contact_table, 'contact_type');
            $goals_query        = $this->generate_search_query('', $this->goals_table, 'goals');
            $query              = "SELECT u.name,u.email,u.type,u.phone,gl.goals,p.service,p.mentoring_level,p.education,av.av_day,av.av_time,cm.contact_type FROM ($user_query)as u  left join ($profile_query) as p on u.id=p.user_fk
            left   join ($availibility_query) as av on u.id=av.user_fk
            left   join ($contact_query)as cm on u.id=cm.user_fk
            left   join ($goals_query)as gl on u.id=gl.user_fk ";


            $stmt = $this->conn->prepare($query);
            $stmt->bindParam(':email', $useremail);

            $stmt->execute();


            $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
            unset($this->resultv['type']);
            unset($this->resultv['email']);
            unset($results[0]['id']);


            //attach result for display
            $this->resultv['user_details'] = $results[0];
        }
        //catch exception during database interaction
        catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }

    }
    //this is used to authenticate a user during login
    public function auth()
    {
        try {
            //get the user email
            $query = "SELECT type,id, email, password
                FROM " . $this->user_table . "
                WHERE email = :email";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            $email = htmlspecialchars(strip_tags($this->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();
            $this->resultv["type"]  = $this->type;
            $this->resultv["error"] = "Wrong email and password Combination";
            $results                = $stmt->fetchAll(PDO::FETCH_OBJ);

            //if email exist in the user table
            if (count($results) > 0) {
                $result = $results[0];
                //validate the password agiasnt the email
                if (password_verify($this->password, $result->password)) {

                    $this->resultv["response"] = "success";
                    $this->resultv["error"]    = "";
                    //  $this->resultv["type"]=$result->type;
                    $this->resultv["email"]    = $result->email;
                    //set the cookie for the user
                    setcookie('useremail', $this->email, time() + (86400 * 30), "/");
                    $this->getUserDetails();
                }
            }


        }
        //catc exception for database interaction
        catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }
    //used to create a new user
    public function create()
    {
        try {
            //generate query to check if the email already exist in the table : email is unique
            $query = "SELECT id
                FROM " . $this->user_table . "
                WHERE email = :email";

            //prepare query for execution
            $stmt = $this->conn->prepare($query);

            $email = htmlspecialchars(strip_tags($this->email));
            $stmt->bindParam(':email', $email);
            $stmt->execute();

            $user                  = null;
            $results               = $stmt->fetchAll(PDO::FETCH_ASSOC);
            $this->resultv["type"] = $this->type;

            if (count($results) > 0) {
                //the email exists in the table already
                $this->resultv["error"] = 'Your email has been registered. Please pick another email.';
            } else {
                //new email entry
                // create insert query into the user table
                $query = "INSERT INTO " . $this->user_table . "(name,email,password,phone,type)VALUES(:name, :email, :password, :phone, :type)";

                // prepare query for execution
                $stmt = $this->conn->prepare($query);

                // sanitize
                $name            = htmlspecialchars(strip_tags($this->name));
                $email           = htmlspecialchars(strip_tags($this->email));
                $password        = htmlspecialchars(strip_tags($this->password));
                $salted_password = password_hash($password, PASSWORD_BCRYPT);
                $phone           = htmlspecialchars(strip_tags($this->phone));
                $type            = htmlspecialchars(strip_tags($this->type));


                // bind the parameters
                $stmt->bindParam(':name', $name);
                $stmt->bindParam(':email', $email);
                $stmt->bindParam(':phone', $phone);
                $stmt->bindParam(':type', $type);
                $stmt->bindParam(':password', $salted_password);



                // Execute the query
                if ($stmt->execute()) {
                    //successfull query
                    $this->resultv["response"] = "success";


                } else {
                    $this->resultv["error"] = $this->conn->errorInfo();

                }
            }
        }
        catch (PDOException $exception) {
            die('ERROR: ' . $exception->getMessage());
        }
    }
    //search mentor function : with  optional parameter
    public function search_mentor($name, $goals, $contact, $availability, $edulevel, $mentorlevel)
    {
        //generating query for user table, filter by mentor and name if user types a name during search'
        $nameq      = $name != "" ? "and name='$name'" : "";
        $user_query = "SELECT id,name,email,phone
          FROM " . $this->user_table . "
          WHERE type = 'Mentor' $nameq";

        //if user search based on mentor level and education level
        if ($mentorlevel != "" && $edulevel != "") {
            $profile_query = "SELECT * FROM  " . $this->profile_table . " WHERE education='$edulevel' and mentoring_level='$mentorlevel'";
        } elseif ($mentorlevel == "" && $edulevel != "") {
            $profile_query = "SELECT * FROM  " . $this->profile_table . " WHERE education='$edulevel'";
        } elseif ($mentorlevel == "" && $edulevel != "") {
            $profile_query = "SELECT * FROM  " . $this->profile_table . " WHERE education='$edulevel' ";
        } elseif ($mentorlevel != "" && $edulevel == "") {
            $profile_query = "SELECT * FROM  " . $this->profile_table . " WHERE mentoring_level='$mentorlevel'";
        } else {
            $profile_query = "SELECT * FROM  " . $this->profile_table . "";
        }

        //generate query using utitlity function called generate_search _query: search quert is similar to profile query above
        $availibility_query = $this->generate_search_query($availability, $this->avaliability_table, 'av_day');
        $contact_query      = $this->generate_search_query($contact, $this->contact_table, 'contact_type');
        $goals_query        = $this->generate_search_query($goals, $this->goals_table, 'goals');
        //create a join from all search query result
        $join_query         = "SELECT u.name,u.email,u.phone,gl.goals,p.service,p.mentoring_level,p.education,p.weektalk,av.av_day,av.av_time,cm.contact_type FROM ($user_query) as u left join ($profile_query) as p on u.id=p.user_fk
          left   join ($availibility_query) as av on u.id=av.user_fk
          left   join ($contact_query)as cm on u.id=cm.user_fk
          left   join ($goals_query)as gl on u.id=gl.user_fk";

        $stmt = $this->conn->prepare($join_query);
        $stmt->execute();
        $results = $stmt->fetchAll(PDO::FETCH_OBJ);

        if (count($results) > 0) {
            //the email exists in the table already
            $this->resultv["response"] = $results;

        } else {
            $this->resultv["response"] = '';
        }

        $this->resultv["count"] = count($results);

    }

    //used to update password
    public function update()
    {

        $query = "UPDATE " . $this->user_table . " SET password=:password  WHERE id=:id";

        //prepare query for excecution
        $stmt = $this->conn->prepare($query);

        // sanitize
        $password = htmlspecialchars(strip_tags($this->password));

        // bind the parameters
        $stmt->bindParam(':password', $password);

        // execute the query
        return ($stmt->execute());
    }
    //check if a user is looged in
    public function is_loggedin()
    {
        if (isset($_COOKIE["useremail"])) {
            return $_COOKIE["useremail"];
        } else {
            return 'notset';
        }


    }
    //log out a user by deleting cookie
    public function logout()
    {
        setcookie("useremail", "", time() - 3600);
        return true;
    }
    //this is a utitlity function to help generate the search filter queries
    //: SELECT user_fk, GROUP_CONCAT(av_day) as av_day, av_time from availability group by user_fk
    private function generate_search_query($string, $tbname, $column)
    {
        $time = $tbname == $this->avaliability_table ? ', GROUP_CONCAT(av_time) as av_time' : '';
        if ($string != '') {
            //convert to an array
            $string      = explode(',', $string);
            $query_array = array();
            foreach ($string as $key => $value) {
                if ($key == 0) {
                    $query_array[] = " $tbname.$column='$value' ";
                } else {
                    $query_array[] = "or  $tbname.$column= '$value' ";
                }
            }
            $query_string = implode('', $query_array);
            //this is used only to get the time for availability

            //generate the query
            $query = "SELECT user_fk, GROUP_CONCAT($column) as $column $time FROM   " . $tbname . " WHERE $query_string group by user_fk";

        } else {
            $query = "SELECT user_fk, GROUP_CONCAT($column) as $column  $time  FROM   $tbname group by user_fk";
        }
        return $query;
    }
}
