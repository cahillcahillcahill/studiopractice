import React from "react";
import { Link } from "react-router-dom";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./CartIndicator.css";

export default function CartIndicator(props) {
  const Total = () => {
    let total = 0;
    Object.values(props.cart).map(
      item => (total += item.price * item.quantity)
    );
    return total;
  };

  return Total() > 0 ? (
    <Link to="/cart">
      <FontAwesomeIcon icon={faShoppingCart} size="xs" />
      <div className="indicator-money">${Total()}</div>
    </Link>
  ) : (
    <div className="indicator-money"></div>
  );
}
