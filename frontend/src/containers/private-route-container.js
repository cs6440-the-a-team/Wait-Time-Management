import PrivateRoute from "../components/private-route"
import { connect } from "react-redux"

const mapStateToProps = function (state) {
    //console.log("Mapping state: ", state.session.get('is_logged_in'), state.session.get('role'));
    return {
        isLoggedIn: state.session.get('is_logged_in'),
        currentRole: state.session.get('role')
    }
};

const PrivateRouteContainer = connect(mapStateToProps)(PrivateRoute);

export default PrivateRouteContainer;