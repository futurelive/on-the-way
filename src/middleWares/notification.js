import { notification } from 'antd';
import error from '../constants/types/notification';

export default () => next => async (action) => {
  if (action.type === error) {
    notification.error(action.payload);
  }
  return next(action);
};
