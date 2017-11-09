/* eslint-disable */
const initialState = {
    creatingUser: false,
    currentUser: null,
    errorMessage: null,
  };
  
  const user = (state = initialState, action) => {
    switch (action.type) {
      case 'NEW_USER_SUCCESS':
        return Object.assign({}, state, {
          creatingUser: false,
          currentUser: action.user,
          errorMessage: null,
        });
  
      case 'NEW_USER':
        return Object.assign({}, state, {
          creatingUser: true,
          errorMessage: null,
        });
  
      case 'NEW_USER_FAILURE':
        return Object.assign({}, state, {
          creatingUser: false,
          errorMessage: action.errorMessage,
          currentUser: null,
        });
  
      default:
        return state;
    }
  };
  
  export default user;
  /* eslint-disable */