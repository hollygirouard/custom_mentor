import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Account from './Account'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const AccountContainer = connect(mapStateToProps)(Account)

export default AccountContainer
