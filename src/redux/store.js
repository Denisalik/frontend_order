import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import createRootReducer from './reducers';
import thunk from 'redux-thunk';

export const history = createBrowserHistory();

const middleware = [thunk, routerMiddleware(history)];

export const store = createStore(createRootReducer(history),
    {},
    applyMiddleware(...middleware)
);

//export default {store, history};