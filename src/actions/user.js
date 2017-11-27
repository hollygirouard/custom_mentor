/* eslint-disable */
import axios from 'axios'

export const NEW_USER = 'NEW_USER';
export const newUser = () => {
    return {
        type: NEW_USER,
        sendAuthRequest: true
    };
};

export const NEW_USER_SUCCESS = 'NEW_USER_SUCCESS';
export const newUserSuccess = (user) => {
    return {
        type: NEW_USER_SUCCESS,
        isLoggedIn: true,
        user,
        errorMessage: "User Created. Great Success!"
    };
}

export const NEW_USER_FAILURE = 'NEW_USER_FAILURE';
export const newUserFailure = (errorMessage) => {
    return {
        type: NEW_USER_FAILURE,
        errorMessage,
    };
};

export const createNewUser = (newUserInfo) => {
    return (dispatch) => {
        dispatch(newUser())

        axios({
            method: 'POST',
            // AWS Config
            // url: '/serverapi/user.php',
            // Development Config
            url: 'http://localhost/custommentor/custom_mentor/serverapi/user.php',
            data: "requesttype=Signup&data=" + (JSON.stringify(newUserInfo))
        }).then(function (response) {
            //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
            //sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
            return response.data.response === 'success' ? dispatch(newUserSuccess(response)) : dispatch(newUserFailure({message: 'something went wrong :('}))
        }).catch(function (error) {
            dispatch(newUserFailure(error))
        });
    }
}
/* eslint-disable */
