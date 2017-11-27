import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import Events from './Events';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const EventsContainer = connect(mapStateToProps, null)(Events);

export default EventsContainer;
