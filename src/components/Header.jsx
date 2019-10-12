import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SavedCarts from "./SavedCarts";
import CartIndicator from "./CartIndicator";
import Logo from "./Logo";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: props.login,
      HeaderLogin: props.login.isLoginSuccess,
      Email: props.login.loginEmail,
      cart: props.cart,
      carts: props.carts,
      prevScrollpos: window.pageYOffset,
      visible: true
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div className={this.state.visible ? "Header" : "Header--hidden"}>
        <Logo/>
        <Routes
          HeaderLogin={this.props.HeaderLogin}
          logout={this.props.logout}
          cart={this.props.cart}
        />
        {this.props.HeaderLogin ? (
          <div className="HeaderLogin">
            <div className="login-greeting">
              Hello,{" "}
              <span className="login-greeting-email">{this.props.Email}</span>!
            </div>
            {Object.keys(this.props.carts)[0] ? (
              <SavedCarts carts={this.props.carts} />
            ) : (
              ""
            )}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

function Routes(props) {
  return (
    <div className="Routes">
      <div className="RouteLink">
        <Link to="/">home</Link>
      </div>
      <div className="RouteLink">
        <Link to="/about">about</Link>
      </div>
      <div className="RouteLink">
        <Link to="/products">products</Link>
      </div>
      <div className="RouteLink">
        {!props.HeaderLogin ? (
          <Link to="/login">login</Link>
        ) : (
          <div className="header-logout" onClick={props.logout}>
            logout
          </div>
        )}
      </div>
      <div className="RouteLink">
        <CartIndicator className="cart-indicator" cart={props.cart} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
    HeaderLogin: state.login.isLoginSuccess,
    Email: state.login.loginEmail,
    carts: state.carts,
    cart: state.cart,
    visible: state.visible
  };
}

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch({ type: "SET_LOGIN_SUCCESS", isLoginSuccess: false })
  };
}

const connectedHeader = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
export { connectedHeader as Header };
