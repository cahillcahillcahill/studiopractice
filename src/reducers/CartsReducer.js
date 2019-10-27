import * as types from "../actions/actionTypes"

export default function cartsReducer(state = {}, action) {
  function genId() {
    return Object.keys(state)[Object.keys(state).length-1]
      ? Number(Object.keys(state)[Object.keys(state).length-1])+1
      : 1
  }

  switch (action.type) {
    case types.ADD_CART:
      return {
        ...state,
        [genId()]: action.cart
      }

    case types.REMOVE_CART:
      let { [action.cartId]: cart, ...cartsWithoutCart } = state
      return cartsWithoutCart

    default:
      return state
  }
}