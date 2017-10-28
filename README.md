# CustomMentor.com

Built in ReactJS from using create-react-app - https://reactjs.org/docs/installation.html

### Run Server
`npm start`

### Build Application
`npm run build`

copy serverapi folder into the build folder
zip and deploy to aws

### Run Tests
No tests available yet. Help by setting up a test!

### Linting
No linting available yet. Help by setting up a linter and suggesting linting rules!

### Tools
https://reactstrap.github.io/components/

### Project Contributors

Owner - Matt Sharratt

Project Manager - Holly White

Developer - Austin Edwards

Developer - Kelvin Sajere

Developer - Jeff Diers

Developer - Kara Fox  

/**************************************************************************************************************************/

The application is made up of front end and back end:
To run the back end  :
1.	Download wamp server (http://www.wampserver.com/en/ ) or xamp server (https://www.apachefriends.org/download.html). This helps to render the PHP files as well as handle database.
2.	Install the software leaving everything to default (port, password e.t.c)
3.	Take note of the file directory where the software is installed (e.g C:\wamp64 or C:\Xamp).
For Wamp server:
1.	Create a within you root directory (e.g. C:\wamp64\www\custommentor or C:\xamp\htdocs) folder to hold custom mentor files. Copy custom mentor files into the folder.
2.	Double click on the software icon, it should open a notification icon the task bar.
3.	Left click on the icon, and click on local host (or preferably type localhost on your browser)
4.	Next, we need to create a virtual host. To the left of your screen, you should see add virtual host (click it)
5.	Go back to task bar(notification), right click on Wamp server icon, hover on tools, click restart DNS.
6.	To import database files, click on the wampserver icon, click on PHPMYADMIN.
7.	Login to PHP my admin.
8.	Create a database “custom_mentor “.
9.	Click on the newly created Database. On the main horizontal menu, click import database.


### To configure server for a development environment

Note that code is commented for AWS production or development.  Swap the commented and uncommented code in the examples below
to switch between development and production.


1.  Configure database for local environment from AWS config:

```
// AWS Config

// $this->host = $_SERVER['RDS_HOSTNAME'];
// $this->db_name = $_SERVER['RDS_DB_NAME'];
// $this->username = $_SERVER['RDS_USERNAME'];
// $this->password = $_SERVER['RDS_PASSWORD'];
// $this->port = $_SERVER['RDS_PORT'];

// Development Config

$this->host = 'localhost';
$this->db_name = 'custom_mentor';
$this->username = 'root';
$this->password =  '';
$this->port = '8080';
```

2. Change route in src/components/Home/Signup.js

```
postLogin(form){
  //send data to API
  axios({
    method: 'POST',
    // AWS Config
    // url: '/serverapi/user.php',
    // Development Congfig
    url: 'http://localhost/custom_mentor/serverapi/user.php',
    data: "requesttype=Signup&data=" + (JSON.stringify(form))
  }).then(function(response) {
    //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
    console.log(response.data);
  }).catch(function(error) {
    console.log(error);
  });
}
```

3. Change route in login action at src/actions/login.js:

```
export const authenticateUser = (loginInfo) => {
    return (dispatch) => {
        dispatch(userLogin())

        axios({
            method: 'POST',
            // AWS Config
            // url: '/serverapi/user.php',
            // Development Config
            url: 'http://localhost/custom_mentor/serverapi/user.php',
            data: "requesttype=Signin&data=" + (JSON.stringify(loginInfo))
        }).then(function (response) {
            //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
            //sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
            console.log(response.data);
            return response.data.response === 'success' ? dispatch(userLoginSuccess(response)) : dispatch(userLoginFailure({message: "Invalid login credentials."}))
        }).catch(function (error) {
            console.log(error);
        });
```


For Xamp server:
The process is the same, the only difference is we don’t need to create a virtual host.
