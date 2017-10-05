import {connect} from 'react-redux'
import {authenticateUser} from '../../actions/login'
import Home from './Home'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const HomeContainer = connect(mapStateToProps)(Home)

export default HomeContainer
