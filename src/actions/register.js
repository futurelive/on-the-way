import * as types from '../constants/types/register';

export const updateRegister = (key, value) => ({
  type: types.updateRegister,
  key,
  payload: value,
});

export const test = 'test';
