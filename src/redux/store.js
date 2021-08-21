import {createBrowserHistory} from 'history';
import {applyMiddleware, createStore} from 'redux';
import {routerMiddleware} from 'connected-react-router';
import {createRootReducer} from './reducers';
import thunk from 'redux-thunk';

const history = createBrowserHistory();


const store = createStore(createRootReducer(history),
    {},
    applyMiddleware(thunk, routerMiddleware(history))
);

export default {store, history};