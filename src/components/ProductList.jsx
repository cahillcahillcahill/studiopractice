import React from "react";
import Product from "./Product";
import { connect } from "react-redux";
import "../App.css";

function ProductList(props) {
  return (
    <div className="list-container">
      {props.products.map(product => (
        <div className="product-list-item">
          <Product
            product={product}
            addToCart={props.addToCart}
            removeFromCart={props.removeFromCart}
            button={props.button}
            cartItem={
              props.cart.filter(cartItem => cartItem.id === product.id)[0]
            }
          />
        </div>
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: item => {
      dispatch({ type: "ADD_PRODUCT", payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: "REMOVE_PRODUCT", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductList);
