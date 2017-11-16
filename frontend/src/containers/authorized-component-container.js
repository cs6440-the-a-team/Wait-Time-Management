import AuthorizedComponent from "../components/authorized-component"
import {connect} from "react-redux"

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.session.get('is_logged_in'),
        currentRole: state.session.get('role')
    }
}

const AuthorizedComponentContainer = connect(mapStateToProps)(AuthorizedComponent);

export default AuthorizedComponentContainer;