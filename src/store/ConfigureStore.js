import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
// import createLogger from 'redux-logger';
import rootReducer from '../reducers/Index';

// const loggerMiddleware = createLogger();

export default function createStoreWithMiddleware() {
    const store = applyMiddleware(
        thunkMiddleware
    )(createStore);
    return store(rootReducer);
}
