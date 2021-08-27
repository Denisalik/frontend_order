import React, {Component} from 'react';
import './App.css';
import Layout from './containers/layout/Layout';
import {Route, Switch, Redirect, BrowserRouter} from 'react-router-dom';
import routes from './router/routes';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import {store} from './redux/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Container fluid>

                                <Switch>
                                    {routes.map((el, ind) => {
                                        return (<Route
                                            {...el}
                                            key={ind}
                                        >
                                        </Route>)
                                    })}
                                    <Redirect to="/"></Redirect>
                                </Switch>
                        </Container>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
