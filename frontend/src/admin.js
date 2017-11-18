import Promise from "promise-polyfill"
import "babel-polyfill";

if (!window.Promise) {
    window.Promise = Promise;
}

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom"
import { Provider, connect } from "react-redux"
import store, { updateInformation } from "./reducers"

window.app_store = store;

import Settings from "./settings"
import Overview from "./overview"
import LoginContainer from "./containers/login-container"

import PrivateRouteContainer from "./containers/private-route-container"
import AuthorizedComponentContainer from "./containers/authorized-component-container"
import MessageContainer from "./containers/message-container"
import LoadingIndicatorContainer from "./containers/loading-indicator-container"

import { logout } from "./actions"

const SETTINGS_ROLES = ['admin', 'staffplus'];

class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div className="app-container">
                        <MessageContainer />
                        <header className="container-fluid">
                            <h3 className="display-4">Wait Time Management</h3>
                            <Switch>
                                <Route path="/admin/login" render={() => (null)} /> {/* Don't show the menu on the login screen */}
                                <Route path="/admin*" render={() => {
                                    return (
                                        <ul className="nav justify-content-end">
                                            <AuthorizedComponentContainer authorizedRoles={SETTINGS_ROLES}>
                                                <li className="nav-item">
                                                    <NavLink to="/admin/overview" title="Home" className="nav-link" activeClassName="active">
                                                        <i className="fa fa-home" />
                                                    </NavLink>
                                                </li>
                                                <li className="nav-item">
                                                    <NavLink to="/admin/settings" title="Settings" className="nav-link" activeClassName="active">
                                                        <i className="fa fa-cog" />
                                                    </NavLink>
                                                </li>
                                            </AuthorizedComponentContainer>
                                            <li>
                                                <a href="#" role="button" className="nav-link" title="Logout" onClick={(e) => {
                                                    e.preventDefault();
                                                    store.dispatch(logout());
                                                }}><i className="fa fa-sign-out" /></a>
                                            </li>
                                        </ul>
                                    )
                                }} />
                            </Switch>
                        </header>
                        <hr />
                        <LoadingIndicatorContainer />

                        <Switch>
                            <Route path="/admin/login" component={LoginContainer} />
                            <PrivateRouteContainer path="/admin*" component={AuthorizedPortion} />
                        </Switch>
                    </div>
                </Router>
            </Provider>
        )
    }
}

class AuthorizedPortion extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        updateInformation();
    }

    render() {
        return (
            <div className="sub-body-container">
                <PrivateRouteContainer authorizedRoles={SETTINGS_ROLES} path={`/admin/settings`} component={Settings} />
                <Route path={`/admin/overview`} component={Overview} />
                <Route path={`/admin`} exact={true} render={({ match }) => (<Redirect to={`/admin/overview`} />)} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("admin-app")
);
