import axios from 'axios'

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

export const authenticateUser = (loginInfo) => {
    return (dispatch) => {
        dispatch(userLogin())

        axios({
            method: 'POST',
            url: '/custom_mentor/serverapi/user.php',
            data: "requesttype=Signin&data=" + (JSON.stringify(loginInfo))
        }).then(function (response) {
            //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
            //sample response :{"response":"success","error":"",type:"Mentee"} :redirect to signin based on response
            console.log(response.data);
            return response.data.response === 'success' ? dispatch(userLoginSuccess(response)) : dispatch(userLoginFailure({message: "Invalid login credentials."}))
        }).catch(function (error) {
            console.log(error);
        });


        // *** FAKE LOGIN ***
        // let user
        // 	if (loginInfo.email === 'jeff.diers@gmail.com') {
        //         user = {
        //             name: 'Jeff',
        //             status: 'mentor'
        //         }
		// 		return dispatch(userLoginSuccess(user));
		// 	} else if(loginInfo.email === 'austin@email.com') {
        //         user ={
        //             name: 'Austin',
        //             status: 'mentee'
        //         }
        //         return dispatch(userLoginSuccess(user))
        //     }
		// 	return dispatch(userLoginFailure({message: "Invalid login credentials."}));
    }
}
