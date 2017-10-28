import { connect } from 'react-redux';
import { authenticateUser } from '../../actions/login';
import Schedule from './Schedule';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const ScheduleContainer = connect(mapStateToProps)(Schedule);

export default ScheduleContainer;
