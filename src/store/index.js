import { createStore, applyMiddleware } from 'redux';
import logger from '../middleWares/logger';
import reducer from '../reducers/index';
import register from '../middleWares/register';
import login from '../middleWares/login';

const middleware = process.env ? [logger, register, login] : [register, login];

const store = createStore(reducer, applyMiddleware(...middleware));

export default store;
