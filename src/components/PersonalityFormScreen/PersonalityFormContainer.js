import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import PersonalityForm from './PersonalityForm'
import DynamicForm from './DynamicForm'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const PersonalityFormContainer = connect(mapStateToProps)(DynamicForm)

export default PersonalityFormContainer
