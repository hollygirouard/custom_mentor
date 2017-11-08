# CustomMentor.com

Built in ReactJS from using create-react-app - https://reactjs.org/docs/installation.html

### Install Dependencies
`npm install`

### Run Server
`npm start`

### Build Application
`npm run build`

copy serverapi folder into the build folder
zip and deploy to aws

### Run Tests
No tests available yet. Help by setting up a test!

### Linting
We are using Eslint with the AirBnB style guide for React.js.

#### To get it up and running:

Quick start documentation: https://eslint.org/docs/user-guide/getting-started

1. Make sure Eslint is supported in your text editor.  Installation varies.
2. Globally install Eslint:
  `npm install -g eslint`
3. Often times, your text editor needs to be closed and reopened for linting to take effect.
4. To lint from command line in the project root directory:
  `npm run lint`
4. Rules can be amended or turned off by modifying the .eslintrc.json file.
5. To turn off rules for a snippet of code (e.g. turn off no-console for http requests)
  ```
  /* eslint-disable no-console */
  // Your code Here
  /* eslint-enable no-console */
  ```

  Configuraton Documentation: https://eslint.org/docs/user-guide/configuring

https://eslint.org/

### Tools
https://reactstrap.github.io/components/

### Project Contributors

Owner - Matt Sharratt

Project Manager/Developer - Holly White

Developers - Austin Edwards, Kelvin Sajere, Jeff Diers, Kara Fox, James Sullivan, Jake Feldman, Gabi Procell, Zeb Girouard & General Assembly Denver WDI5

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






1. Change route in src/components/Home/Signup.js

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

2. Change route in login action at src/actions/login.js:

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
