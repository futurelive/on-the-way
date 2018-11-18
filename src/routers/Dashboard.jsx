import React, { Component } from 'react';
import { Route } from 'react-router';
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
    const { dashboardPath, handleDashboardPath } = this.props;
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
              component={DashboardMain}
            />
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  dashboardPath: PropTypes.string.isRequired,
  handleDashboardPath: PropTypes.func.isRequired,
};

export default Dashboard;
