import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import {createNewUser} from '../../actions/users'
import SignForm from './SignForm'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        authenticateUser: (userInfo) => dispatch(authenticateUser(userInfo)),
        createNewUser: (userInfo) => dispatch(createNewUser(userInfo))
    }
}

const SignFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignForm)

export default SignFormContainer
