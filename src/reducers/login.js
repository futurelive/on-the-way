import { Map } from 'immutable';
import * as types from '../constants/types/login';

const defaultStore = Map({
  userName: '18773179042',
  password: '123456',
  viewPassword: false,
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.updateLogin:
      return state.set(action.key, action.payload);
    case types.loginSuccess:
      alert(123);
      return state;
    default:
      return state;
  }
};
