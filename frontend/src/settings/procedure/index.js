import React from "react"
import { Route, NavLink } from "react-router-dom"

import ProcedureListContainer from "./procedure-list"
import PatientStatusListContainer from "./patient-status-list"

const ProcedureSettings = ({match}) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <NavLink exact to={`${match.url}`} className="nav-link" activeClassName="active">Procedures</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${match.url}/patient-statuses`} className="nav-link" activeClassName="active">Patient Statuses</NavLink>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <Route exact path={`${match.url}`} component={ProcedureListContainer} />
                <Route path={`${match.url}/patient-statuses`} component={PatientStatusListContainer} />
            </div>
        </div>
    )
};

export default ProcedureSettings;