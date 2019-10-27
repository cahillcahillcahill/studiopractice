import React from "react";
import ProductButton from "./ProductButton";
import { connect } from "react-redux";
import './Cart.css';

function Cart(props) {
  //add to willmount
  props.cart.sort(function(a, b) {
    return a.id - b.id;
  });

  const Total = () => {
    let total = 0;
    Object.values(props.cart).map(
      item => (total += item.price * item.quantity)
    );
    return total;
  };
  
  return (
    <div>
      {props.cart[0] && (
        <div className="cart-total">Total before checkout: ${Total()}</div>
      )}
      <div className="cart">
        {Object.values(props.cart).map(item => (
          <div className="cart-item">
            <img src={"../products/" + item.image} height={150}></img>
            <div className="item-titles">{item.name}</div>
            <div className="item-titles">({item.quantity})</div>
            <div className="item-titles">
              Subtotal: ${item.quantity * item.price}
            </div>
            <div>
              <ProductButton
                button="+"
                addToCart={props.addToCart}
                cartItem={item}
              />
              <ProductButton
                button="-"
                removeFromCart={props.removeFromCart}
                cartItem={item}
              />
            </div>
            <div>
              <ProductButton
                button="empty"
                removeAllFromCart={props.removeAllFromCart}
                cartItem={item}
              />
            </div>
          </div>
        ))}
      </div>
      {props.cart[0] && (
        <div className="shipping-info">
          Items ship with lorem ipsum dolor sit amet consectetur adipisicing
          elit. Exercitationem, odit soluta!
        </div>
      )}
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
    },
    removeAllFromCart: item => {
      dispatch({ type: "REMOVE_ALL", payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
