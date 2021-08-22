import React, {Component, Suspense} from 'react';
import './App.css';
import Layout from './containers/layout/Layout';
import {Route, Switch, Redirect} from 'react-router-dom';
import {ConnectedRouter} from 'connected-react-router';
import routes from './router/routes';
import {Container} from 'reactstrap';
import {Provider} from 'react-redux';
import store from './redux/store'
import history from './redux/store'

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Layout>
                        <Container fluid>
                            <Suspense fallback={() => (
                                <div className="animated fadeIn pt-3 text-center">Loading...</div>
                            )}>
                                <Switch>
                                    {routes.map((el, ind) => {
                                        return (<Route
                                            key={ind}
                                            path={el.path}
                                            exact={el.exact}
                                            name={el.name}
                                            render={(props) => (<el.component {...props}></el.component>)}
                                        >
                                        </Route>)
                                    })}
                                    <Redirect to="/"></Redirect>
                                </Switch>
                            </Suspense>
                        </Container>
                    </Layout>
                </ConnectedRouter>
            </Provider>
        );
    }
}

export default App;
