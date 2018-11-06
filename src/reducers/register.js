import { Map } from 'immutable';
import * as types from '../constants/types/register';

const defaultStore = Map({
  userName: '',
  phoneNumber: '',
  password: '',
  mail: '',
});

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.updateRegister:
      return state.set(action.key, action.payload);
    default:
      return state;
  }
};
