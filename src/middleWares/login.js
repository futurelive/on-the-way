import * as types from '../constants/types/login';
import handleRouter from '../actions/router';
import * as keys from '../constants/key/keys';
import login from '../services/login';
import { outFactory } from '../bean/login';
import handleNetWork from '../error/handle';
import { dashboard } from '../history';

const loginTypes = [
  types.handleLogin,
];

const handleMapping = {
  [types.handleLogin]: async ({ store }) => {
    const sendData = outFactory(store.getState().get(keys.login));
    const { data } = await login(sendData);

    if (handleNetWork(data, store)) store.dispatch(handleRouter(dashboard));
  },
};

export default store => next => async (action) => {
  if (loginTypes.includes(action.type)) handleMapping[action.type]({ store });
  return next(action);
};
