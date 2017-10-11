const initialState = {
    errorMessage: null
}

const users = (state = initialState, action) => {
  switch (action.type) {
    case 'SAVE_USER':
      return state

    case 'SAVE_USER_FAILURE':
    return Object.assign({}, state, {
        errorMessage: action.errorMessage,
        userSaved: false
      })

    default:
      return state
  }
}

export default users
