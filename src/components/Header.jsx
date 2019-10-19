import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import SavedCarts from "./SavedCarts";
import CartIndicator from "./CartIndicator";
import Logo from "./Logo";
import HeaderMenu from "./HeaderMenu";
import "./Header.css";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      login: props.login,
      headerLogin: props.login.isLoginSuccess,
      Email: props.login.loginEmail,
      cart: props.cart,
      carts: props.carts,
      prevScrollPos: window.pageYOffset,
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
    const { prevScrollPos } = this.state;
    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollPos > currentScrollPos;

    this.setState({
      prevScrollPos: currentScrollPos,
      visible
    });
  };

  render() {
    return (
      <div className={this.state.visible ? "header" : "header--hidden"}>
        <HeaderMenu ShowMenu={this.ShowMenu} />
        <Logo />
        <Routes
          headerLogin={this.props.headerLogin}
          logout={this.props.logout}
          cart={this.props.cart}
        />
        {this.props.headerLogin ? (
          <div className="header-login">
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
          <div className="header-login"></div>
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
        {!props.headerLogin ? (
          <Link to="/login">login</Link>
        ) : (
          <div className="header-logout" onClick={props.logout}>
            logout
          </div>
        )}
      </div>
      <div className="RouteLink">
        <CartIndicator cart={props.cart} />
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    login: state.login,
    headerLogin: state.login.isLoginSuccess,
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
