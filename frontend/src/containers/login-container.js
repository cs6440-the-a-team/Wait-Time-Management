import Login from "../components/login";
import {connect} from "react-redux";
import { lang } from "moment";
import { loginAttempt } from "../actions";

const mapStateToProps = (state, ownProps) => {
    return {
        isLoggedIn: state.session.get('is_logged_in')
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginAttempt: (username, password) => {
            dispatch(loginAttempt(username, password));
        }
    }
}

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default LoginContainer;