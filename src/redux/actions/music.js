export const actions = {
    CLIENTS: "CLIENTS",
    BANDS: "BANDS",
    CONCERTS: "CONCERTS",
    ORDERS: "ORDERS",
    POST_ORDER: "POST_ORDER"
}
export const actionMethods = {
    fetchOrders:(payload)=> ({
        type: actions.ORDERS,
        payload
    }),
    fetchBands:(payload)=> ({
        type: actions.BANDS,
        payload
    }),
    fetchConcerts:(payload)=> ({
        type: actions.CONCERTS,
        payload
    }),
    fetchClients:(payload)=> ({
        type: actions.CLIENTS,
        payload
    }),
    postOrder: (payload)=>({
        type: actions.POST_ORDER,
        payload
    })
}