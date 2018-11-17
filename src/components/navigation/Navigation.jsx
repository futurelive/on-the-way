import React, { Component } from 'react';
import { Icon } from 'antd';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './Navigation.module.scss';

class Navigation extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render() {
    const { dashboardPath, handleDashboardPath } = this.props;
    return (
      <div className={styles.nav}>
        <Link
          to="/dashboard"
          className={dashboardPath === '/dashboard' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard')}
        >
          <Icon type="plus" />
          <span>工作台</span>
        </Link>
        <Link
          to="/dashboard/docs"
          className={dashboardPath === '/dashboard/docs' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard/docs')}
        >
          <Icon type="plus" />
          <span>我的知识库</span>
        </Link>
        <Link
          to="/dashboard"
          className={dashboardPath === '/dashboard' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard')}
        >
          <Icon type="plus" />
          <span>我的文档</span>
        </Link>
        <Link
          to="/dashboard"
          className={dashboardPath === '/dashboard' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard')}
        >
          <Icon type="plus" />
          <span>我的收藏</span>
        </Link>
        <Link
          to="/dashboard"
          className={dashboardPath === '/dashboard' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard')}
        >
          <Icon type="plus" />
          <span>我的关注</span>
        </Link>
        <Link
          to="/dashboard"
          className={dashboardPath === '/dashboard' ? styles.selected : undefined}
          onClick={() => handleDashboardPath('/dashboard')}
        >
          <Icon type="plus" />
          <span>我的讨论</span>
        </Link>
      </div>
    );
  }
}

Navigation.propTypes = {
  dashboardPath: PropTypes.string.isRequired,
  handleDashboardPath: PropTypes.func.isRequired,
};

export default Navigation;
