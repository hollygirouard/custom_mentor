import {connect} from 'react-redux'
import {userSignOut} from '../../actions/logout'
import UserHome from './UserHome'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        userSignOut: () => dispatch(userSignOut())
    }
}

const UserContainer = connect(mapStateToProps, mapDispatchToProps)(UserHome)

export default UserContainer
