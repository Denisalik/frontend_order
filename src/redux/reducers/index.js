import {combineReducers} from 'redux';
import {connectRouter} from 'connected-react-router';
import {reducer as musicReducer} from "./music";
const createRootReducer = (history) =>
    combineReducers({
        router: connectRouter(history),
        music: musicReducer
    })

export default createRootReducer;