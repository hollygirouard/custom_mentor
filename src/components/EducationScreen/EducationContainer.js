import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import Education from './Education';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const EducationContainer = connect(mapStateToProps, null)(Education);

export default EducationContainer;
