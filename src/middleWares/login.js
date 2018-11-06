import * as types from '../constants/types/login';
import login from '../services/login';
import { outFactory } from '../bean/login';

const loginTypes = [
  types.handleLogin,
];

const handleMapping = {
  [types.handleLogin]: async ({ store }) => {
    const sendData = outFactory(store.getState().get('login'));
    const { data } = await login(sendData);
    console.log(data);
  },
};

export default store => next => async (action) => {
  if (loginTypes.includes(action.type)) handleMapping[action.type]({ store });
  return next(action);
};
