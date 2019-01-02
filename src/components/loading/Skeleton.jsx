import React from 'react';
import {
  Skeleton,
} from 'antd';
import PropTypes from 'prop-types';
import style from './Comm.module.scss';

const SkeletonComponent = (props) => {
  const { rows } = props;
  return (
    <div className={style.skeleton}>
      <Skeleton paragraph={{ rows, width: '100%' }} active title={false} />
    </div>
  );
};

SkeletonComponent.propTypes = {
  rows: PropTypes.number,
};

SkeletonComponent.defaultProps = {
  rows: 10,
};

export default SkeletonComponent;
