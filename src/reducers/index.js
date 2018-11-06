import { combineReducers } from 'redux-immutable';
import register from './register';
import login from './login';

export default combineReducers({
  register,
  login,
});
