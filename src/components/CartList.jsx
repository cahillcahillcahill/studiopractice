import React, { Component } from "react";
import { connect } from "react-redux";
import Cart from "./Cart";
import CartButton from "./CartButton";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as CartsActions from "../actions/CartsActions";
import { bindActionCreators } from "redux";

class CartList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: props.carts,
      cart: props.cart,
      loggedin: props.loggedIn.isLoginSuccess
    };
  }

  render() {
    return (
      <div className="cart-container">
        {!this.props.loggedIn && Object.keys(this.props.cart).length > 0 ? (
          <Link to="/login">
            <p>Login to save your cart</p>
          </Link>
        ) : (
          ""
        )}
        {Object.keys(this.props.cart).length > 0 ? (
          this.props.loggedIn ? (
            <CartButton
              button="add"
              cart={this.props.cart}
              addCart={()=>this.props.actions.addCart(this.props.cart)}
            />
          ) : (
            ""
          )
        ) : (
          "your cart is empty my friend :("
        )}
        <Cart />
      </div>
    );
  }
}

CartList.propTypes = {
  carts: PropTypes.array.isRequired,
  cart: PropTypes.object.isRequired,
  loggedIn: PropTypes.isRequired
};

function mapStateToProps(state) {
  return {
    carts: state.carts,
    cart: state.cart,
    loggedIn: state.login.isLoginSuccess
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CartsActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartList);
