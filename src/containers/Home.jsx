import { connect } from 'react-redux';
import HomeRouter from '../routers/Home';

function mapStateToProps(state) {
  const { users } = state.users;
  return {
    users,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getUser: () => {
      dispatch({ type: 'getUsers' });
    },
  };
}

const Home = connect(mapStateToProps, mapDispatchToProps)(HomeRouter);

export default Home;
