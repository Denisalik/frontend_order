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
        const redirect = <Redirect to="/"></Redirect>
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <Layout>
                        <Container fluid className={"App"}>
                                <Switch>
                                    {routes.map((el, ind) => {
                                        return (<Route
                                            path={el.path}
                                            exact={el.exact}
                                            component={el.component}
                                            key={ind}
                                        >
                                        </Route>)
                                    })}
                                    {redirect}

                                </Switch>
                        </Container>
                    </Layout>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
