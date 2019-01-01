import { connect } from 'react-redux';
import DashboardRouter from '../routers/Dashboard';
import handleRouterAction from '../actions/router';

function mapStateToProps(state) {
  return {
    dashboardPath: state.get('router').get('dashboardPath'),
    recentEdit: state.get('dashboard').get('recentEdit'),
    suggest: state.get('dashboard').get('suggest'),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    handleDashboardPath: (path) => {
      dispatch(handleRouterAction(path));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DashboardRouter);
