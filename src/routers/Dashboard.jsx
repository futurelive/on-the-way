import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect } from 'react-router';
import { Row, Col } from 'antd';
import PropTypes from 'prop-types';
import Skeleton from '../components/loading/Skeleton';
import Header from '../components/header/Header';
import styles from './comm.module.scss';

const DashboardMain = lazy(() => import('./dashboard/Dashboard'));
const Navigation = lazy(() => import('../components/navigation/Navigation'));

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
      recentEvent,
    } = this.props;
    return (
      <div>
        <Header />
        <div className={styles.container}>
          <Row>
            <Col span={4}>
              <Suspense fallback={<Skeleton rows={15} />}>
                <Navigation
                  dashboardPath={dashboardPath}
                  handleDashboardPath={handleDashboardPath}
                />
              </Suspense>
            </Col>
            <Col span={20}>
              <Suspense fallback={<Skeleton rows={8} />}>
                <Route
                  path="/dashboard/main"
                  render={() => (
                    <DashboardMain
                      recentEdit={recentEdit}
                      suggest={suggest}
                      recentEvent={recentEvent}
                    />
                  )}
                />
                <Redirect path="/dashboard" to="/dashboard/main" />
              </Suspense>
            </Col>
          </Row>
        </div>
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
    articleId: PropTypes.number.isRequired,
  })).isRequired,

  recentEvent: PropTypes.arrayOf(PropTypes.shape({
    user: PropTypes.string.isRequired,
    userIcon: PropTypes.string.isRequired,
    userId: PropTypes.number.isRequired,
    updateTime: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    knowledgeName: PropTypes.string.isRequired,
    knowledgeId: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    articleId: PropTypes.number.isRequired,
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
