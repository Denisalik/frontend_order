import Home from '../containers/routes/home/Home';
import Bands from '../containers/routes/Menu/Bands';
import Concerts from '../containers/routes/Menu/Concerts';
import Clients from '../containers/routes/Menu/Clients';
import Orders from '../containers/routes/Menu/Orders';
import CreateOrder from '../containers/routes/Create/Orders';
/*
const Home = React.lazy(() => import('../containers/routes/home/Home'));
const Bands = React.lazy(() => import('../containers/routes/Menu/Bands'))
const Clients = React.lazy(() => import('../containers/routes/Menu/Clients'))
const Concerts = React.lazy(() => import('../containers/routes/Menu/Concerts'))
const Orders = React.lazy(() => import('../containers/routes/Menu/Orders'))
const CreateOrder = React.lazy(()=> import('../containers/routes/Create/Orders'))
*/
const routes = [
    {
        name: 'Главная',
        path: '/',
        component: Home
    },
    {
        name: 'Музыкальные группы',
        path: '/bands',
        //exact: true,
        component: Bands
    },
    {
        name: 'Заказы',
        path: '/orders',
        //exact: true,
        component: Orders
    },
    {
        name: 'Концерты',
        path: '/concerts',
        //exact: true,
        component: Concerts
    },
    {
        name: 'Клиенты',
        path: '/clients',
        //exact: true,
        component: Clients
    },

    {
        name: 'Создать новый Заказ',
        path: '/orders/create',
        //exact: true,
        component: CreateOrder
    },
]

export default routes;