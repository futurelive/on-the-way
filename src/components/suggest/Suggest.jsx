import React from 'react';
import {
  Card,
} from 'antd';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// import {
//   Card, Input, Icon, Button, Form,
// } from 'antd';
import style from './Suggest.module.scss';

const bodyStyle = { padding: '10px 20px' };
const { Meta } = Card;

const Suggest = (props) => {
  const {
    suggest,
  } = props;
  return (
    <div className={style.col}>
      <Card
        hoverable
        bodyStyle={bodyStyle}
        cover={<img alt="" src={suggest[0].cover} />}
      >
        <Meta
          title={suggest[0].title}
        />
      </Card>
      {
        suggest.map((s, i) => {
          if (i !== 0) return (<Link to="/" key={s.articleId}>{ s.title }</Link>);
          return null;
        })
      }
    </div>
  );
};

Suggest.propTypes = {
  suggest: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    knowledgeId: PropTypes.number.isRequired,
    userName: PropTypes.string.isRequired,
    articleId: PropTypes.number.isRequired,
  })),
};

// 默认添加一个介绍地址
Suggest.defaultProps = {
  suggest: [],
};

export default Suggest;
