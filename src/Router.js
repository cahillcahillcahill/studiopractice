import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Products from "./pages/ProductsPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import Login from "./pages/Login.jsx";

const Router = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/about" component={About} />
    <Route path="/products" component={Products} />
    <Route path="/cart" component={CartPage} />
    <Route path="/login" component={Login} />
  </Switch>
);

export default Router;
