import { connect } from 'react-redux';
import DashboardRouter from '../routers/Dashboard';
import handleRouterAction from '../actions/router';

function mapStateToProps(state) {
  return {
    dashboardPath: state.get('router').get('dashboardPath'),
    // 最近编辑
    recentEdit: state.get('dashboard').get('recentEdit'),
    // 最新动态
    recentEvent: state.get('dashboard').get('recentEvent'),
    // 今日推荐
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
