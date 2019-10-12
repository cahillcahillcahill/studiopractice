import React from "react";
import ProductList from "../components/ProductList";
import data from "../data/products.json";

class Home extends React.Component {
  render() {
    var date = new Date();
    date.setDate(date.getDate() - 90);

    return (
      <div className="home-page">
        <div className="page-header">new pouches!</div>
        <ProductList
          products={data.products.filter(product => {
            return product.dateAdded > date.toISOString().substring(0, 10);
          })}
          button="add"
        />
      </div>
    );
  }
}

export default Home;
