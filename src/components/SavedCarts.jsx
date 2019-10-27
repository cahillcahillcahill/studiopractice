import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";
import "./SavedCarts.css";
import * as CartsActions from "../actions/CartsActions";
import * as CartActions from "../actions/CartActions";
import { bindActionCreators } from "redux";

class SavedCarts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      carts: props.carts,
      show: false
    };
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  getTotal(cart) {
    let total = 0;
    Object.values(cart).map(item => (total += item.price * item.quantity));
    return total;
  }

  getKeyByValue(object, value) {
    return Object.keys(object).find(key => object[key] === value);
  }

  render() {
    let date = new Date();
    date.setDate(date.getDate());
    const sleep = milliseconds => {
      return new Promise(resolve => setTimeout(resolve, milliseconds));
    };
    return (
      <div className="saved-carts">
        <Modal show={this.state.show} handleClose={this.hideModal}>
          {Object.keys(this.props.carts)[0]
            ? Object.values(this.props.carts).map(cart => (
                <div className="saved-cart">
                  <div className="header-and-x">
                    <div
                      className="saved-cart-header"
                      onClick={() =>
                        sleep(100).then(() => {
                          this.hideModal();
                          this.props.actions.Cart.setCart(cart);
                        })
                      }
                    >
                      <Link to="/cart">
                        {
                          <div className="saved-cart-date-total">
                            <div className="saved-cart-date">
                              {date.toISOString().substring(0, 10)}
                            </div>
                            <div className="saved-cart-total">
                              ${this.getTotal(cart)}
                            </div>
                          </div>
                        }
                      </Link>
                    </div>
                    <div className="delete-btn">
                      <CartButton
                        button="remove"
                        cart={cart}
                        removeCart={()=>this.props.actions.Carts.removeCart(cart, this.getKeyByValue(this.props.carts, cart))}
                      />
                    </div>
                  </div>
                  <div className="items-and-button">
                    <div>
                      {Object.values(cart).map(item => (
                        <div className="saved-cart-item">
                          {item.name + " "}({item.quantity})
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))
            : ""}
        </Modal>
        <button
          className="saved-carts-button"
          type="button"
          onClick={this.showModal}
        >
          saved carts ({Object.keys(this.props.carts).length})
        </button>
      </div>
    );
  }
}

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <button className="saved-cart-close" onClick={handleClose}>
          <div className="saved-cart-x">x</div>
        </button>
        {children}
      </section>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    carts: state.carts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      Carts: bindActionCreators(CartsActions, dispatch),
      Cart: bindActionCreators(CartActions, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedCarts);