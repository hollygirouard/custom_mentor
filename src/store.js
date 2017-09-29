import * as reducers from './reducers';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const middleware = applyMiddleware(thunk, logger);
const store = createStore(combineReducers(reducers), middleware);

export default store;
