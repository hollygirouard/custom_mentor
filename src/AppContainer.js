import { connect } from 'react-redux';
import { authenticateUser } from './actions/login';
import App from './App';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticateUser: () => dispatch(authenticateUser(ownProps)),
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default AppContainer;
