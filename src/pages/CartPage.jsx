import React from "react";
import CartList from "../components/CartList";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function CartPage() {
  return (
    <div className="cart-page">
      <div className="cart-page-header">
        your cart <FontAwesomeIcon icon={faShoppingCart} size="sm" />
      </div>
      <CartList />
    </div>
  );
}
