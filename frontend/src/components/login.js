import React from "react";
import {Redirect} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();

        this.props.loginAttempt(this.state.username, this.state.password);
    }

    render() {
        if (this.props.isLoggedIn) {
            return (
                <Redirect to={`/admin`} />
            )
        }

        return (
            <div className="row justify-content-center">
                <div className="col-md-3">
                    <div className="card">
                        <div className="card-header">
                            <h4>Login</h4>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <input type="text" name="username" placeholder="Username" value={this.state.username} onChange={this.onInputChange} className="form-control" />
                            </div>
                            <div className="form-group">
                                <input type="password" name="password" placeholder="Password" value={this.state.password} onChange={this.onInputChange} className="form-control" />
                            </div>
                        </div>
                        <div className="card-footer">
                            <a href="#" role="button" className="btn btn-success form-control" onClick={this.onSubmit}>Login</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;