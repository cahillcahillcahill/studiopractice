import React from "react";

export default function Productbutton(props) {
  switch (props.button) {
    case "add":
      return (
        <button onClick={() => props.addToCart(props.product)} type="add">
          add to cart
        </button>
      );
    case "remove":
      return (
        <button
          onClick={() => props.removeFromCart(props.cartItem)}
          type="remove"
        >
          x
        </button>
      );
    case "+":
      return (
        <button onClick={() => props.addToCart(props.cartItem)} type="inc">
          +
        </button>
      );
    case "-":
      return (
        <button onClick={() => props.removeFromCart(props.cartItem)} type="dec">
          -
        </button>
      );
    case "empty":
      return (
        <button
          onClick={() => props.removeAllFromCart(props.cartItem)}
          type="empty"
        >
          remove all
        </button>
      );
    default:
      return <button>temporarily unavailable</button>;
  }
}
