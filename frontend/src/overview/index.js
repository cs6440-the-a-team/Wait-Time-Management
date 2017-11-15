import React from "react"
import { Route, NavLink, Redirect } from "react-router-dom"

import PatientsContainer from "./patients"
import RoomsContainer from "./rooms"

import store, {updateInformation} from "../reducers"

class Overview extends React.Component {

    constructor(props) {
        super(props);
        this.updateInterval = null;
    }

    componentDidMount() {
        this.updateInterval = setInterval(updateInformation, (1000 * 60)); // Update every minute.
    }

    componentWillUnmount() {
        clearInterval(this.updateInterval);
    }

    render() {
        let match = this.props.match;

        return (
            <div className="container-fluid">
                <h4>Radiology Clinic Administration</h4>
                <br />
                <ul className="nav nav-pills justify-content-left">
                    <li className="nav-item">
                        <NavLink to={`${match.url}/patients`} className="nav-link" activeClassName="active">Patients</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${match.url}/rooms`} className="nav-link" activeClassName="active">Rooms</NavLink>
                    </li>
                </ul>

                <hr />

                <Route path={`${match.url}/patients`} component={PatientsContainer} />
                <Route path={`${match.url}/rooms`} component={RoomsContainer} />
                <Route exact path={match.url} render={() => (<Redirect to={`${match.url}/patients`} />)} />

                <hr />

            </div>
        )
    }
}

export default Overview;