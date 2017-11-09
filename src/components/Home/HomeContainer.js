import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/login';
import { createNewUser } from '../../actions/user';
import Home from './Home';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  authenticateUser: userInfo => dispatch(authenticateUser(userInfo)),
  createNewUser: newUserInfo => dispatch(createNewUser(newUserInfo)),
});

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeContainer;
