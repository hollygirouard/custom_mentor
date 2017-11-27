import { connect } from 'react-redux';
import { userSignOut } from '../../actions/logout';
import Account from './Account';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const mapDispatchToProps = dispatch => ({
  userSignOut: () => dispatch(userSignOut()),
});

const AccountContainer = connect(mapStateToProps, mapDispatchToProps)(Account);

export default AccountContainer;
