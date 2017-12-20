import { connect } from 'react-redux';
import { authenticateUser } from './actions/login';
import { userSignOut } from './actions/logout';
import App from './App';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticateUser: () => dispatch(authenticateUser(ownProps)),
  userSignOut: () => dispatch(userSignOut()),

});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
