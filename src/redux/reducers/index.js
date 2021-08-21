import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as clientReducer} from "./clients";
const createRootReducer = (history) => {
    combineReducers({
        router: connectRouter(history),
        client: clientReducer
    })
};

export default createRootReducer;