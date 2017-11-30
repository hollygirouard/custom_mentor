import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import MentorSearch from './MentorSearch';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const MentorSearchContainer = connect(mapStateToProps, null)(MentorSearch);

export default MentorSearchContainer;
