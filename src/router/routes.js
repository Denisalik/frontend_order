import React from 'react';

const Home = React.lazy(() => import('../containers/routes/home/Home'));
const Bands = React.lazy(() => import('../containers/routes/Menu/Bands'))
const Clients = React.lazy(() => import('../containers/routes/Menu/Clients'))
const Concerts = React.lazy(() => import('../containers/routes/Menu/Concerts'))
const Orders = React.lazy(() => import('../containers/routes/Menu/Orders'))

const routes = [
    {
        name: 'Главная',
        path: '/',
        exact: true,
        component: Home
    },
    {
        name: 'Музыкальные группы',
        path: '/bands',
        exact: true,
        component: Bands
    },
    {
        name: 'Заказы',
        path: '/orders',
        exact: true,
        component: Orders
    },
    {
        name: 'Концерты',
        path: '/concerts',
        exact: true,
        component: Concerts
    },
    {
        name: 'Клиенты',
        path: '/clients',
        exact: true,
        component: Clients
    },

]

export default routes;