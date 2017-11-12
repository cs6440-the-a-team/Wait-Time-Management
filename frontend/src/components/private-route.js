import React from "react"
import { Route, Redirect } from "react-router-dom"

let PrivateRoute = ({ isLoggedIn, currentRole, authorizedRoles, component: Component, ...rest }) => {
    return (
        <Route {...rest} render={(props) => {
            if (isLoggedIn) {
                
                if (authorizedRoles.length === 0 || authorizedRoles.indexOf(currentRole) >= 0) {
                    
                    return (
                        <Component {...props} />
                    )
                }
                else {
                    
                    return (
                        <h1>Forbidden.</h1>
                    )
                }
            }
            else {
                return (
                    <Redirect to={{
                        pathname: "/admin/login",
                        state: { from: props.location }
                    }} />
                )
            }
        }} />
    )
};

PrivateRoute.defaultProps = {
    isLoggedIn: false,
    currentRole: null,
    authorizedRoles: []
};

export default PrivateRoute;