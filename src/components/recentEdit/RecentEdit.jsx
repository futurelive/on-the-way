import React from 'react';
import {
  Row, Col, Card, Icon,
} from 'antd';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {
//   Card, Input, Icon, Button, Form,
// } from 'antd';
import style from './RecentEdit.module.scss';

const bodyStyle = { padding: '10px 20px' };

const RecentEdit = () => (
  <div className={style.container}>
    <Row>
      <Col span={12} className={style.col}>
        <Card hoverable bodyStyle={bodyStyle}>
          <p>
            <span>文章标题</span>
            <Icon type="edit" />
          </p>
          <p>
            <span>
              <Link to="/">主页</Link>
              <span className={style.split}>/</span>
              <Link to="/">知识库</Link>
            </span>
            <span className={style.date}>2018-12-15</span>
          </p>
        </Card>
      </Col>
      <Col span={12} className={style.col}>
        <Card hoverable bodyStyle={bodyStyle}>
          <p>
            <span>文章标题</span>
            <Icon type="edit" />
          </p>
          <p>
            <Link to="/">主页</Link>
            <span className={style.split}>/</span>
            <Link to="/">知识库</Link>
            <span className={style.date}>2018-12-15</span>
          </p>
        </Card>
      </Col>
    </Row>
  </div>
);

// RecentEdit.propTypes = {
//   register: PropTypes.shape({
//     userName: PropTypes.string.isRequired,
//     phoneNumber: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     mail: PropTypes.string.isRequired,
//   }).isRequired,
//   updateRegister: PropTypes.func.isRequired,
//   handleRegister: PropTypes.func.isRequired,
// };

export default RecentEdit;
