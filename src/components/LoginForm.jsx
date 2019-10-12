import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../reducers/LoginReducer";
import { createBrowserHistory } from "history";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      emailInvalid: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  render() {
    const history = createBrowserHistory();

    let { email, password, loggedIn, emailInvalid } = this.state;
    let { isLoginPending, isLoginSuccess, loginError } = this.props;

    return (
      <form className="login-form" name="loginForm" onSubmit={this.onSubmit}>
        <div className="form-group-collection">
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              onChange={e => this.setState({ email: e.target.value })}
              value={email}
            />
          </div>

          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              name="password"
              onChange={e => this.setState({ password: e.target.value })}
              value={password}
            />
          </div>
        </div>
        <input
          ref={element => {
            this.input = element;
          }}
          type="submit"
          value={!isLoginSuccess ? "Login" : "Logout"}
        />
        {emailInvalid && (
          <div className="email-invalid">
            Please enter a valid email address
          </div>
        )}
        <div className="email-invalid">
          {/* { isLoginPending && <div>put a spinner here</div> } */}
          {isLoginSuccess && history.goBack()}
          {loginError && <div>{loginError.message}</div>}
        </div>
      </form>
    );
  }

  onSubmit(e) {
    e.preventDefault();
    const SubmitValue = this.input.value;
    let { email, password } = this.state;
    this.setState({ emailInvalid: false });

    SubmitValue === "Login"
      ? this.validateEmail(email)
        ? this.props.login(email, password)
        : this.setState({ emailInvalid: true })
      : this.props.logout();

    this.setState({
      email: "",
      password: ""
    });
  }

  validateEmail(email) {
    const emailRe = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRe.exec(email);
  }
}

const mapStateToProps = state => {
  return {
    isLoginPending: state.login.isLoginPending,
    isLoginSuccess: state.login.isLoginSuccess,
    loginError: state.login.loginError
  };
};

const mapDispatchToProps = dispatch => {
  return {
    login: (email, password) => dispatch(login(email, password))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
