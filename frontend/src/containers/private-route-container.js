import PrivateRoute from "../components/private-route"
import { connect } from "react-redux"
import { withRouter } from "react-router-dom"

const mapStateToProps = function (state, ownProps) {

    //console.log('Setting up state for private route: ', ownProps.component.name);
    return {
        isLoggedIn: state.session.get('is_logged_in'),
        currentRole: state.session.get('role')
    }
};

const PrivateRouteContainer = withRouter(connect(mapStateToProps)(PrivateRoute));

export default PrivateRouteContainer;