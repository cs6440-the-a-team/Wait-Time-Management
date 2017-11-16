import React from "react"
import { Route, Redirect } from "react-router-dom"

let PrivateRoute = ({ isLoggedIn, currentRole, authorizedRoles, component: Component, ...rest }) => {
    //console.log("Should component be rendered? ", Component.name, isLoggedIn, currentRole, authorizedRoles);

    return (
        <Route {...rest} render={(props) => {
            //console.log('Rendering private route for', Component.name);
            if (isLoggedIn) {
                
                if (authorizedRoles.length === 0 || authorizedRoles.indexOf(currentRole) >= 0) {
                    //console.log("Authorized for this part of the application. Rendering...", currentRole, authorizedRoles, Component.name, props);
                    return (
                        <Component {...props} />
                    )
                }
                else {
                    //console.log("Not authorized for this part of the application...", currentRole, authorizedRoles);
                    return (
                        <h1>Forbidden.</h1>
                    )
                }
            }
            else {
                //console.log("Not logged in...", isLoggedIn, currentRole, authorizedRoles);
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