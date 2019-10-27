import * as types from './actionTypes'

export function setCart(cart) {
    return { type: types.SET_CART, cart };
  }