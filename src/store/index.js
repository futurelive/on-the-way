import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import reducer from '../reducers/index';
import register from '../middleWares/register';

const store = createStore(reducer, applyMiddleware(logger, register));

export default store;
