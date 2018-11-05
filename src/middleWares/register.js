import * as types from '../constants/types/register';

const register = () => next => (action) => {
  switch (action.type) {
    case types.updateRegister:
      return next(action);
    default:
      break;
  }
  return next(action);
};

export default register;