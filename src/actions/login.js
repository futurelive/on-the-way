import * as types from '../constants/types/login';

export const updateLogin = (key, value) => ({
  type: types.updateLogin,
  key,
  payload: value,
});

export const handleLogin = () => ({
  type: types.handleLogin,
});

export const loginSuccess = () => ({
  type: types.loginSuccess,
});
