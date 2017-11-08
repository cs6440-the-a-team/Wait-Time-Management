import React from "react"
import { Route, NavLink } from "react-router-dom"
import RoomListContainer from "./room-list"
import RoomTypeListContainer from "./type-list"
import RoomStatusListContainer from "./status-list"

const RoomSettings = ({match}) => {
    return (
        <div className="card text-center">
            <div className="card-header">
                <ul className="nav nav-tabs card-header-tabs">
                    <li className="nav-item">
                        <NavLink exact to={`${match.url}`} className="nav-link" activeClassName="active">Rooms</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${match.url}/types`} className="nav-link" activeClassName="active">Room Types</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to={`${match.url}/statuses`} className="nav-link" activeClassName="active">Room Statuses</NavLink>
                    </li>
                </ul>
            </div>
            <div className="card-body">
                <Route exact path={`${match.url}`} component={RoomListContainer} />
                <Route path={`${match.url}/types`} component={RoomTypeListContainer} />
                <Route path={`${match.url}/statuses`} component={RoomStatusListContainer} />
            </div>
        </div>
    )
}

export default RoomSettings;