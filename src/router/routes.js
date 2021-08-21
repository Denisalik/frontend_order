import React from 'react';

const Home = React.lazy(()=>import('../containers/routes/home/Home'));

const routes = [
    {
        name: 'Главная',
        path: '/',
        exact: true,
        component: Home
    }
]

export default routes;