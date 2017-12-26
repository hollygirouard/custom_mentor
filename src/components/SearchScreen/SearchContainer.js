import { connect } from 'react-redux';
// import { authenticateUser } from '../../actions/login';
import Search from './Search';

const mapStateToProps = state => ({
  isLoggedIn: state.session.isLoggedIn,
  currentUser: state.session.currentUser,
  errorMessage: state.session.errorMessage,
});

const SearchContainer = connect(mapStateToProps, null)(Search);

export default SearchContainer;
