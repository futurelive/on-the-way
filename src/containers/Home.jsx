import { connect } from 'react-redux';
import HomeRouter from '../routers/Home';

function mapStateToProps() {
  return {};
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
