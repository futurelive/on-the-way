import {
  createStore,
  applyMiddleware,
  compose,
} from 'redux';
import logger from '../middleWares/logger';
import reducer from '../reducers/index';
import register from '../middleWares/register';
import login from '../middleWares/login';
import notification from '../middleWares/notification';
import router from '../middleWares/router';
// import initialState from './initialStore';
// import makeRootReducer from './makeRootReducer';

const middleware = process.env
  ? [logger, register, login, notification, router]
  : [register, login, notification, router];

const enhancers = [];

// if (__DEV__ && window.__REDUX_DEVTOOLS_EXTENSION__) {
//   enhancers.push(window.__REDUX_DEVTOOLS_EXTENSION__());
// }

const rootStore = () => {
  const store = createStore(
    reducer,
    // initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );
  store.asyncReducers = {};
  return store;
};

export default rootStore();
