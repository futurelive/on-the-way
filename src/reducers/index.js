import { combineReducers } from 'redux-immutable';
import register from './register';
import login from './login';
import router from './router';

export default combineReducers({
  register,
  login,
  router,
});
