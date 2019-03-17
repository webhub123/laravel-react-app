import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger'

import userReducer from './reducers/userReducer';
import mathReducer from './reducers/mathReducer';

export default createStore(
    combineReducers(
        {
            mathReducer,
            userReducer
        }    
    ),
    {}, 
    applyMiddleware( createLogger())
);