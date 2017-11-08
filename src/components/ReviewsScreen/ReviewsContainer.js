import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import Reviews from './Reviews';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const ReviewsContainer = connect(mapStateToProps, null)(Reviews);

export default ReviewsContainer;
