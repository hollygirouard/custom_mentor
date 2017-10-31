/* eslint-disable no-console */

import axios from 'axios';

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => ({
  type: USER_LOGIN,
  sendAuthRequest: true,
});

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = user => ({
  type: USER_LOGIN_SUCCESS,
  isLoggedIn: true,
  user,
});

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const userLoginFailure = errorMessage => ({
  type: USER_LOGIN_FAILURE,
  errorMessage,
});

export const authenticateUser = loginInfo => (dispatch) => {
  dispatch(userLogin());

  axios({
    method: 'POST',
    // AWS Config
    url: '/serverapi/user.php',
    // Development Config
    // url: 'http://localhost/custom_mentor/serverapi/user.php',
    data: `requesttype=Signin&data=${JSON.stringify(loginInfo)}`,
  }).then((response) => {
    /* eslint-disable max-len */
    // sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
    // sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
    /* eslint-enable max-len */
    console.log(response.data);
    return response.data.response === 'success' ? dispatch(userLoginSuccess(response)) : dispatch(userLoginFailure({ message: 'Invalid login credentials.' }));
  }).catch((error) => {
    console.log(error);
  });
};
