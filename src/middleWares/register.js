import * as types from '../constants/types/register';
import register from '../services/register';
import { outFactory } from '../bean/register';

const registerTypes = [
  types.handleRegister,
];

const handleMapping = {
  [types.handleRegister]: async ({ store }) => {
    const sendData = outFactory(store.getState().get('register'));
    const { data } = await register(sendData);
    console.log(data);  // eslint-disable-line
  },
};

export default store => next => async (action) => {
  if (registerTypes.includes(action.type)) handleMapping[action.type]({ store });
  return next(action);
};
