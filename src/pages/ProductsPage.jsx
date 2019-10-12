import React from "react";
import ProductList from "../components/ProductList";
import Logo from '../components/Logo';
import data from "../data/products.json";

export default function Products() {
  return (
    <div className="products-page">
      <div className="page-header">all products</div>
      <ProductList products={data.products} button="add" />
      <Logo/>
    </div>
  );
}