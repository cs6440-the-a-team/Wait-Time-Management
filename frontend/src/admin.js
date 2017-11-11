import Promise from "promise-polyfill"
import "babel-polyfill";

if (!window.Promise) {
    window.Promise = Promise;
}

import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom"
import { Provider, connect } from "react-redux"
import store from "./reducers"

window.app_store = store;

import Settings from "./settings"
import Overview from "./overview"
import LoginContainer from "./containers/login-container"

import { ConnectedPrivateRoute } from "./components/private-route"
import MessageContainer from "./containers/message-container"
import LoadingIndicatorContainer from "./containers/loading-indicator-container"

import { getRooms, getRoomTypes, addMessage, loginAttempt, logout, listProcedures, listProcedureStatuses, listRoomTypeStatuses } from "./actions"

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
                                <Route path="/admin/login" render={() => (null)} />
                                <Route path="/admin*" render={() => {
                                    return (
                                        <ul className="nav justify-content-end">
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
                                            <li>
                                                <a href="#" role="button" className="nav-link" title="Logout" onClick={(e) => {
                                                    e.preventDefault();
                                                    store.dispatch(logout());
                                                }}><i className="fa fa-sign-out"/></a>
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
                            <ConnectedPrivateRoute path="/admin*" component={AuthorizedPortion} />
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
        store.dispatch(listProcedureStatuses());
        store.dispatch(listProcedures());
        store.dispatch(listRoomTypeStatuses());
        store.dispatch(getRoomTypes());
        store.dispatch(getRooms());
    }

    render() {
        return (
            <div>
                <Route path={`/admin/settings`} component={Settings} />
                <Route path={`/admin/overview`} component={Overview} />
                <Route path={`/admin`} exact={true} render={({ match }) => (<Redirect to={`${match.url}/overview`} />)} />
            </div>
        )
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("admin-app")
);
