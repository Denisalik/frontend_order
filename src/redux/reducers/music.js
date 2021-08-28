import {actions} from "../actions/music"

const initialState = {
    clients: [],
    bands: [],
    concerts: [],
    orders: []
}

export const reducer = (state= initialState, action) => {
    switch(action.type){
        case actions.CLIENTS:
            return {...state, clients: action.payload.data}
        case actions.BANDS:
            return {...state, bands: action.payload.data}
        case actions.CONCERTS:
            return {...state, concerts: action.payload.data}
        case actions.ORDERS:
            return {...state, orders: action.payload.data}
        default:
            return state

    }
}