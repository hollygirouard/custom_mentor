import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Schedeule from './Schedeule'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const SchedeuleContainer = connect(mapStateToProps)(Schedeule)

export default SchedeuleContainer
