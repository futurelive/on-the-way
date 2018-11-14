import * as types from '../constants/types/login';
import * as keys from '../constants/key/login';
import login from '../services/login';
import { outFactory } from '../bean/login';
import handleNetWork from '../error/handle';
import { history, loginPath } from '../history';

const loginTypes = [
  types.handleLogin,
];

const handleMapping = {
  [types.handleLogin]: async ({ store }) => {
    const sendData = outFactory(store.getState().get(keys.login));
    const { data } = await login(sendData);

    if (handleNetWork(data, store)) history.push(loginPath());
  },
};

export default store => next => async (action) => {
  if (loginTypes.includes(action.type)) handleMapping[action.type]({ store });
  return next(action);
};
