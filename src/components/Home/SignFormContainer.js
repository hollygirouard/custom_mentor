import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/login';
import SignForm from './SignForm';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  authenticateUser: userInfo => dispatch(authenticateUser(userInfo)),
});

const SignFormContainer = connect(mapStateToProps, mapDispatchToProps)(SignForm);

export default SignFormContainer;
