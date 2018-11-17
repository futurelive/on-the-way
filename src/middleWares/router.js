import handleRouter from '../constants/types/router';
import { history } from '../history';

const routerTypes = [
  handleRouter,
];

const handleMapping = {
  [handleRouter]: (action) => {
    history.push(action.payload);
  },
};

export default () => next => (action) => {
  if (routerTypes.includes(action.type)) handleMapping[action.type](action);
  return next(action);
};
