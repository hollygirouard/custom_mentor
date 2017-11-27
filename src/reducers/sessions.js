const initialState = {
  sendAuthRequest: false,
  isLoggedIn: false,
  currentUser: null,
  errorMessage: null,
};

const session = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_LOGIN_SUCCESS':
      return Object.assign({}, state, {
        isLoggedIn: true,
        currentUser: action.user,
        errorMessage: null,
      });

    case 'USER_LOGIN':
      return Object.assign({}, state, {
        sendAuthRequest: true,
        errorMessage: null,
      });

    case 'USER_LOGIN_FAILURE':
      return Object.assign({}, state, {
        isLoggedIn: false,
        errorMessage: action.errorMessage,
        currentUser: null,
      });

    case 'USER_LOGOUT':
      return Object.assign({}, state, {
        sendAuthRequest: true,
      });

    case 'USER_LOGOUT_SUCCESS':
      return Object.assign({}, state, {
        isLoggedIn: false,
        currentUser: null,
        errorMessage: null,
      });

    case 'USER_LOGOUT_FAILURE':
      return Object.assign({}, state, {
        errorMessage: action.errorMessage,
      });

    default:
      return state;
  }
};

export default session;
