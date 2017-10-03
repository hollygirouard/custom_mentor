import * as reducers from './reducers';
import {applyMiddleware, combineReducers, createStore} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { routerReducer } from 'react-router-redux'

const middleware = applyMiddleware(thunk, logger);
const store = createStore(combineReducers({...reducers, routing: routerReducer}), middleware);

export default store;
