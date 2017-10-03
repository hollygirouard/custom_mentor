import {connect} from 'react-redux'
import Header from './Header'

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.session.isLoggedIn,
        currentUser: state.session.currentUser,
        errorMessage: state.session.errorMessage
    }
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
