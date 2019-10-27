import React from "react";

export default function CartButton(props) {
  switch (props.button) {
    case "add":
      return (
        <button onClick={() => props.addCart()} type="save">
          save cart
        </button>
      );
    case "remove":
      return (
        <button onClick={() => props.removeCart()} type="unsave">
          x
        </button>
      );
    default:
      return "";
  }
}