import React, { Component } from 'react';
import { Route, Redirect } from 'react-router';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Header from '../components/header/Header';
import Navigation from '../components/navigation/Navigation';
import DashboardMain from './dashboard/Dashboard';

class Dashboard extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const {
      dashboardPath,
      handleDashboardPath,
      recentEdit,
      suggest,
    } = this.props;
    return (
      <div>
        <Header />
        <Row>
          <Col span={4}>
            <Navigation
              dashboardPath={dashboardPath}
              handleDashboardPath={handleDashboardPath}
            />
          </Col>
          <Col span={20}>
            <Route
              path="/dashboard/main"
              render={() => (<DashboardMain recentEdit={recentEdit} suggest={suggest} />)}
            />
            <Redirect path="/dashboard" to="/dashboard/main" />
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboardPath: PropTypes.string.isRequired,
  handleDashboardPath: PropTypes.func.isRequired,
  recentEdit: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    knowledgeName: PropTypes.string.isRequired,
    knowledgeId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    updateTime: PropTypes.string.isRequired,
  })).isRequired,
  suggest: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    knowledgeId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    articleId: PropTypes.number.isRequired,
  })).isRequired,
};

export default Dashboard;
