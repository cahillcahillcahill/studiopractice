import { handleResponse, handleError } from "./apiUtils";
const baseUrl = "http://localhost:3001/carts/";

export function saveCart(cart) {
    return fetch(baseUrl + (cart.id || ""), {
      method: cart.id ? "PUT" : "POST", // POST for create, PUT to update when id already exists.
      headers: { "content-type": "application/json" },
      body: JSON.stringify(cart)
    })
      .then(handleResponse)
      .catch(handleError);
  }