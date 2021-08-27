import {actionMethods} from "../actions/music";
import {getOrders, getBands, getClients, getConcerts, postBand} from "../axios/axios";

export const actionCreator = {
    fetchOrders: () => (dispatch) => {
        return getOrders().then(response=>{
            dispatch(actionMethods.fetchOrders(response));
            return response;
        })
    },
    fetchBands: () => (dispatch) => {
        return getBands().then(response=>{
            dispatch(actionMethods.fetchBands(response));
            return response;
        })
    },
    fetchConcerts: () => (dispatch) => {
        return getConcerts().then(response=>{
            dispatch(actionMethods.fetchConcerts(response));
            return response;
        })
    },
    fetchClients: () => (dispatch) => {
        return getClients().then(response=>{
            dispatch(actionMethods.fetchClients(response));
            return response;
        })
    },
    postOrder: (concert_id, client_id, payload) => (dispatch) => {
        return postBand(concert_id, client_id, payload).then(response => {
            dispatch(actionMethods.postOrder(response))
            return response;
        })
    }
}