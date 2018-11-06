import { createStore, applyMiddleware } from 'redux';
import logger from '../middleWares/logger';
import reducer from '../reducers/index';
import register from '../middleWares/register';
import login from '../middleWares/login';

const store = createStore(reducer, applyMiddleware(logger, register, login));

export default store;
