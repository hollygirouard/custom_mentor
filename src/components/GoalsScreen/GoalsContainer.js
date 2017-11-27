import { connect } from 'react-redux';
import { userSignOut } from '../../actions/logout';
import Goals from './Goals';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(userSignOut()),
});

const GoalsContainer = connect(mapStateToProps, mapDispatchToProps)(Goals);

export default GoalsContainer;
