const addCart = (state, cart) => {
  const savedCart = arrayToObject(cart);
  const savedCartID = Object.keys(state)[0]
    ? Number(Object.keys(state)[Object.keys(state).length - 1]) + 1
    : 1;
  return {
    ...state,
    [savedCartID]: savedCart
  };
};

const arrayToObject = array =>
  array.reduce((obj, item) => {
    obj[item.id] = item;
    return obj;
  }, {});

//cart is cart id here
const removeCart = (state, cart) => {
  let { [cart]: deleted, ...newState } = state;
  return newState;
};

const cartsReducer = (state = {}, action) => {
  switch (action.type) {
    case "ADD_CART":
      return addCart(state, action.payload);

    case "REMOVE_CART":
      return removeCart(state, action.payload);

    default:
      return state;
  }
};

export default cartsReducer;
