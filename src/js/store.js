import { createStore, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import reducer from './reducers/index'

const loggerMiddleware = createLogger();


let store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware, // lets us dispatch() functions (for async requests)
        loggerMiddleware // neat middleware that logs actions
    )
);


export default store;