import React, { Component } from "react";
import ProductButton from "./ProductButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "./Product.css";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product,
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render(props) {
    return (
      <div className="product">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <div className="product-modal-title">{this.props.product.name}</div>
          <div className="product-modal-artist">
            {this.props.product.artist}
          </div>
          <div className="img-and-description">
            <img
              title={this.props.product.name}
              src={`/products/${this.props.product.image}`}
              alt={""}
            />
            <div className="description-price-button">
              <div className="product-modal-description">
                {this.props.product.description}
              </div>
              <div className="price-and-button">
                <div className="product-modal-price">
                  ${this.props.product.price}
                </div>
                <ProductButton
                  product={this.props.product}
                  button="add"
                  addToCart={() => {
                    this.props.addToCart(this.props.product);
                    this.hideModal();
                  }}
                />
              </div>
            </div>
          </div>
        </Modal>
        <img
          height={250}
          title={this.props.product.name}
          src={`/products/${this.props.product.image}`}
          alt={""}
          onClick={this.showModal}
        />
        <h3>{this.props.product.name}</h3>
        <h5>{this.props.product.artist}</h5>
        {/* <div>{ this.props.product.description }</div> */}
        <div>${this.props.product.price}</div>
        <div className="product-btns-container">
          <ProductButton
            product={this.props.product}
            button={this.props.button}
            addToCart={this.props.addToCart}
            removeFromCart={this.props.removeFromCart}
            cartItem={this.props.cartItem}
          />
          <div className="remove-cart-container">
            <div></div>
            {this.props.cartItem ? (
              <div className="cart-quantity">
                <Link to="/cart">
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    color="seagreen"
                    size="lg"
                  />
                </Link>
                ({this.props.cartItem.quantity})
              </div>
            ) : null}
            {this.props.cartItem ? (
              <ProductButton
                button="remove"
                removeFromCart={this.props.removeFromCart}
                cartItem={this.props.cartItem}
              />
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="product-modal-main">
        <div>
          <button className="product-modal-close" onClick={handleClose}>
            X
          </button>
        </div>

        {children}
      </section>
    </div>
  );
};

export default Product;
