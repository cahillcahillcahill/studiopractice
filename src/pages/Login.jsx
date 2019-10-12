import React from "react";
import LoginForm from "../components/LoginForm";

class Login extends React.Component {
  render() {
    return (
      <div className="login-page">
        <div className="page-header">login</div>
        <LoginForm />
      </div>
    );
  }
}

export default Login;
