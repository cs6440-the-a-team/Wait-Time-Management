import React from "react"
import { Route, NavLink } from "react-router-dom"
import RoomSettings from "./room"
import ProcedureSettings from "./procedure"

const Settings = ({ match }) => {
    return (
        <div className="container-fluid">
            <h4>Radiology Clinic Administrative Configuration Settings</h4>
            <br/>
            <ul className="nav nav-pills justify-content-left">
                <li className="nav-item">
                    <NavLink to={`${match.url}/room`} className="nav-link" activeClassName="active">Room</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to={`${match.url}/procedure`} className="nav-link" activeClassName="active">Procedure</NavLink>
                </li>
            </ul>

            <hr/>

            <Route path={`${match.url}/room`} component={RoomSettings}/>
            <Route path={`${match.url}/procedure`} component={ProcedureSettings} />
            <Route exact path={match.url} render={() => (
                <p className="help-block">Please select a setting category</p>
            )} />

            <hr/>
        </div>
    )
};

export default Settings;