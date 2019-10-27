import * as types from "./actionTypes";

export function addCart(cart) {
  return { type: types.ADD_CART, cart };
}

export function removeCart(cart, cartId) {
  return { type: types.REMOVE_CART, cart, cartId };
}