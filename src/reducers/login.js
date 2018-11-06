import { Map } from 'immutable';
import * as types from '../constants/types/login';

const defaultStore = Map({
  userName: '',
  password: '',
  viewPassword: false,
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.updateLogin:
      return state.set(action.key, action.payload);
    default:
      return state;
  }
};
