import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import {
//   Card, Input, Icon, Button, Form,
// } from 'antd';
import style from './RecentEvent.module.scss';

const bodyStyle = { padding: '10px 20px' };

const RecentEdit = (props) => {
  const {
    title, knowledgeName,
    userName, updateTime,
  } = props;
  return (
    <div className={style.container}>
      <Card hoverable bodyStyle={bodyStyle}>
        <p>
          <span className={style.title}>{ title }</span>
          {/* <Icon type="edit" /> */}
        </p>
        <p>
          <span>
            <Link to="/">{ userName }</Link>
            <span className={style.split}>/</span>
            <Link to="/">{ knowledgeName }</Link>
          </span>
          <span className={style.date}>{ updateTime }</span>
        </p>
      </Card>
    </div>
  );
};

RecentEdit.propTypes = {
  title: PropTypes.string,
  knowledgeName: PropTypes.string,
  userName: PropTypes.string,
  updateTime: PropTypes.string,
};

RecentEdit.defaultProps = {
  title: '文章标题',
  knowledgeName: '',
  userName: '',
  updateTime: new Date().toLocaleString(),
};

export default RecentEdit;
