import { combineReducers } from 'redux-immutable';
import register from './register';
import login from './login';
import router from './router';
import dashboard from './dashboard';

export default combineReducers({
  register,
  login,
  router,
  dashboard,
});

/**
 * Immutable不支持动态引入reducer，等待修复
 *
 */
// export default function createReducer(asyncReducers) {
//   return combineReducers({
//     register,
//     login,
//     router,
//     dashboard,
//     ...asyncReducers,
//   });
// }
