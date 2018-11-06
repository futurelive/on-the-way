import * as types from '../constants/types/register';

const defaultStore = {
  userName: '',
  phoneNumber: '',
  password: '',
  mail: '',
};

export default (state = defaultStore, action) => {
  switch (action.type) {
    case types.updateRegister:
      return { ...state, [action.key]: action.payload };
    default:
      return state;
  }
};
