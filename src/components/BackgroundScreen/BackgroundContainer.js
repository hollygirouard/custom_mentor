import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Background from './Background'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const BackgroundContainer = connect(mapStateToProps)(Background)

export default BackgroundContainer
