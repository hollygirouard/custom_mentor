import {connect} from 'react-redux'
import {userSignOut} from '../../actions/logout'
import CommLog from './CommLog'

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

const CommLogContainer = connect(mapStateToProps, mapDispatchToProps)(CommLog)

export default CommLogContainer
