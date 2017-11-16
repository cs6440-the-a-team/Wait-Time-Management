import React from "react"
import PropTypes from "prop-types"

const AuthorizedComponent = ({isLoggedIn, currentRole, authorizedRoles, children}) => {
    if (isLoggedIn) {
        if (authorizedRoles.length === 0 || authorizedRoles.indexOf(currentRole) >= 0) {
            //console.log('Authorized! Rendering...', currentRole, authorizedRoles);
            return children;
        }
    }

    //console.log("Not authorized.", currentRole, authorizedRoles);
    return null;
};

AuthorizedComponent.propTypes = {
    isLoggedIn: PropTypes.bool,
    currentRole: PropTypes.string,
    authorizedRoles: PropTypes.arrayOf(PropTypes.string)
};

AuthorizedComponent.defaultProps = {
    isLoggedIn: false,
    currentRole: "",
    authorizedRoles: []
};

export default AuthorizedComponent;