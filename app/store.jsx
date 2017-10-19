import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'; // https://github.com/evgenyrodionov/redux-logger
import thunkMiddleware from 'redux-thunk'; // https://github.com/gaearon/redux-thunk
import rootReducer from './reducers/index'

export default createStore(rootReducer, applyMiddleware(thunkMiddleware, createLogger()))
