import React, { Component } from 'react';
import { Row, Col } from 'antd';
import RecentEdit from '../../components/recentEdit/RecentEdit';
import styles from './comm.module.scss';
// import { Route } from 'react-router';
// import { Row, Col } from 'antd';
// import PropTypes from 'prop-types';
// import Header from '../components/header/Header';
// import Navigation from '../components/navigation/Navigation';

class Dashboard extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    return (
      <div className={styles.dashboard}>
        <Row>
          <Col span={17}>
            <h4>最近编辑</h4>
            <RecentEdit />
            <br />
            <h4>动态</h4>
            <RecentEdit />
          </Col>
          <Col span={7}>
            <RecentEdit />
          </Col>
        </Row>
      </div>
    );
  }
}

// Main.propTypes = {
//   dashboardPath: PropTypes.string.isRequired,
//   handleDashboardPath: PropTypes.func.isRequired,
// };

export default Dashboard;
