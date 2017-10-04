import { browserHistory } from 'react-router'

export const USER_LOGIN = 'USER_LOGIN';
export const userLogin = () => {
    return {
        type: USER_LOGIN,
        sendAuthRequest: true
    };
};

export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';
export const userLoginSuccess = (user) => {
    return {
        type: USER_LOGIN_SUCCESS,
        isLoggedIn: true,
        user
    };
}

export const USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE';
export const userLoginFailure = (errorMessage) => {
    return {
        type: USER_LOGIN_FAILURE,
        errorMessage,
    };
}

export const authenticateUser = (userInfo) => {
    return (dispatch) => {
        dispatch(userLogin());
        	if (userInfo.email === 'jeff.diers@gmail.com') {
				return dispatch(userLoginSuccess());
			}
			return dispatch(userLoginFailure({message: "Invalid login credentials."}));
    }
}
