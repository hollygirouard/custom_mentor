import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Activities from './Activities'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const ActivitiesContainer = connect(mapStateToProps)(Activities)

export default ActivitiesContainer
