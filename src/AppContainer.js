import {connect} from 'react-redux';
import {authenticateUser} from './actions/login';
import App from './App';

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.isLoggedIn,
    currentUser: state.session.currentUser
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser: () => dispatch(authenticateUser(ownProps))
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer
