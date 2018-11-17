import { createStore, applyMiddleware } from 'redux';
import logger from '../middleWares/logger';
import reducer from '../reducers/index';
import register from '../middleWares/register';
import login from '../middleWares/login';
import notification from '../middleWares/notification';
import router from '../middleWares/router';

const middleware = process.env
  ? [logger, register, login, notification, router]
  : [register, login, notification, router];

const store = createStore(reducer, applyMiddleware(...middleware));


export default store;
