import React from 'react';
import {
  Spin,
} from 'antd';
import style from './Loading.module.scss';

const Loading = () => (
  <div className={style.container}>
    <Spin size="large" />
  </div>
);

// const Loading = () => (
//   <div className={style.container}>
//     <Skeleton paragraph={{ rows: 15, width: '100%' }} active title={false} />
//   </div>
// );

export default Loading;
