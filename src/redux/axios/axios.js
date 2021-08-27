import axios from 'axios';

const URL = "http://localhost"
const PORT = "8080"

export const getOrders = () => axios.get(`${URL}:${PORT}/api/orders`);
export const getConcerts = () => axios.get(`${URL}:${PORT}/api/bands`);
export const getClients = () => axios.get(`${URL}:${PORT}/api/clients`);
export const getBands = () => axios.get(`${URL}:${PORT}/api/bands`);

export const getOrder = (id) => axios.get(`${URL}:${PORT}/api/order/${id}`);
export const getConcert = (id) => axios.get(`${URL}:${PORT}/api/concert/${id}`);
export const getClient = (id) => axios.get(`${URL}:${PORT}/api/client/${id}`);
export const getBand = (id) => axios.get(`${URL}:${PORT}/api/band/${id}`);

export const postBand = (concert_id, client_id, payload) => axios.post(`${URL}:${PORT}/api/bands?concert_id=${concert_id}&client_id=${client_id}`, payload);

export default axios;