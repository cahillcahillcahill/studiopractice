const cartWithoutItem = (cart, item) =>
  cart.filter(cartItem => cartItem.id !== item.id);

const itemInCart = (cart, item) =>
  cart.filter(cartItem => cartItem.id === item.id)[0];

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  return cartItem === undefined
    ? [...cartWithoutItem(cart, item), { ...item, quantity: 1 }]
    : [
        ...cartWithoutItem(cart, item),
        { ...cartItem, quantity: cartItem.quantity + 1 }
      ];
};

const removeFromCart = (cart, item) => {
  return item.quantity === 1
    ? [...cartWithoutItem(cart, item)]
    : [
        ...cartWithoutItem(cart, item),
        { ...item, quantity: item.quantity - 1 }
      ];
};

const removeAllFromCart = (cart, item) => {
  return [...cartWithoutItem(cart, item)];
};

const setCart = (state, payload) => {
  const cartID = payload.cart[0];
  const cart = payload.cart[1];
  const carts = payload.carts;

  return Object.keys(carts).includes(cartID) ? Object.values(cart) : state;
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return addToCart(state, action.payload);

    case "REMOVE_PRODUCT":
      return removeFromCart(state, action.payload);

    case "REMOVE_ALL":
      return removeAllFromCart(state, action.payload);

    case "SET_CART":
      return setCart(state, action.payload);

    default:
      return state;
  }
};

export default cartReducer;
