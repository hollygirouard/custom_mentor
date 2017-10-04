export const USER_LOGOUT = 'USER_LOGOUT'
export const userLogout = () => {
  return {
    type: USER_LOGOUT,
    sendAuthRequest: true
  }
}

export const USER_LOGOUT_SUCCESS = 'USER_LOGOUT_SUCCESS'
export const userLogoutSuccess = (user) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    isLoggedIn: false,
  }
}

export const USER_LOGOUT_FAILURE = 'USER_LOGOUT_FAILURE'
export const userLogoutFailure = (errorMessage) => {
  return {
    type: USER_LOGOUT_FAILURE,
    errorMessage,
  }
}

export const userSignOut = () => {
  return (dispatch) => {
    dispatch(userLogout())
    return dispatch(userLogoutSuccess())
  }
}
