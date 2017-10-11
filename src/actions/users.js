import axios from 'axios'
import {userLoginSuccess} from './login'

export const SAVE_USER = 'SAVE_USER'
export const saveUser = () => {
  return {
    type: SAVE_USER,
  }
}

export const SAVE_USER_FAILURE = 'SAVE_USER_FAILURE'
export const saveUserFailure = (errorMessage) => {
  console.log(errorMessage)
  return {
    type: SAVE_USER_FAILURE,
    errorMessage
  }
}

export const createNewUser = (userInfo) => {
  return (dispatch) => {
    dispatch(saveUser())
    axios({
        method: 'POST',
        url: 'custom_mentor/serverapi/user.php',
        data: "requesttype=Signup&data=" + (JSON.stringify(userInfo))
      }).then(function(response) {
        //sample response :{"response":"failed","error":"Your email has been registered. Please pick another email.",type:""}
        console.log(response.data)
        let user = response.data
        return user.response === 'success' ? dispatch(userLoginSuccess(user)) : dispatch(saveUserFailure(user.error))
      }).catch(function(error) {
        console.log(error)
        return dispatch(saveUserFailure(error))
      })
  }
}