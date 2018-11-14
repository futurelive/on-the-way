import { connect } from 'react-redux';
import DashboardRouter from '../routers/Dashboard';

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

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRouter);
