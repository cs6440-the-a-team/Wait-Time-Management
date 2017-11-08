import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, NavLink, Switch, Redirect } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./reducers"

import Settings from "./settings"
import Overview from "./overview"

const App = () => (
    <Provider store={store}>
        <Router>
            <div>
                <header className="container-fluid">
                    <h3 className="display-4">Wait Time Management</h3>
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
                    </ul>
                </header>
                <hr />
                <Route path="/admin/settings" component={Settings} />
                <Route path="/admin/overview" component={Overview} />
                <Route path="/admin" exact={true} render={() => (<Redirect to="/admin/overview" />)} />
            </div>
        </Router>
    </Provider>
);

ReactDOM.render(
    <App />,
    document.getElementById("admin-app")
);
