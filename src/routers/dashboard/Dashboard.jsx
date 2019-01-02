import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'antd';
import RecentEdit from '../../components/recentEdit/RecentEdit';
import RecentEvent from '../../components/recentEvent/RecentEvent';
import Suggest from '../../components/suggest/Suggest';
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
    const { recentEdit, suggest, recentEvent } = this.props;
    return (
      <div className={styles.dashboard}>
        <Row>
          <Col span={17}>
            <h4>最近编辑</h4>
            <Row>
              {
                recentEdit.map(s => (
                  <RecentEdit
                    key={s.articleId}
                    title={s.title}
                    userName={s.userName}
                    knowledgeName={s.knowledgeName}
                    updateTime={s.updateTime}
                  />
                ))
              }
            </Row>
            <br />
            <h4>动态</h4>
            {
              recentEvent.map(s => (
                <RecentEvent
                  key={s.articleId}
                />
              ))
            }
          </Col>
          <Col span={6}>
            <h4>今日推荐</h4>
            <Suggest suggest={suggest} />
          </Col>
        </Row>
      </div>
    );
  }
}

Dashboard.propTypes = {
  recentEdit: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    knowledgeName: PropTypes.string.isRequired,
    knowledgeId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    updateTime: PropTypes.string.isRequired,
    articleId: PropTypes.number.isRequired,
  })),

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
  })),
};

Dashboard.defaultProps = {
  recentEdit: [],
  suggest: [],
};

export default Dashboard;
