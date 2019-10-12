import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import cartReducer from "../reducers/CartReducer";
import cartsReducer from "../reducers/CartsReducer";
import LoginReducer from "../reducers/LoginReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  carts: cartsReducer,
  login: LoginReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger))
);

export default store;
