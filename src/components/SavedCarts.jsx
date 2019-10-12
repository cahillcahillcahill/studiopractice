import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

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
            ? Object.entries(this.props.carts).map(cart => (
                <div className="saved-cart">
                  <div className="header-and-x">
                    <div
                      className="saved-cart-header"
                      onClick={() =>
                        sleep(100).then(() => {
                          this.hideModal();
                          this.props.setCart({
                            cart: cart,
                            carts: this.props.carts
                          });
                        })
                      }
                    >
                      <Link to="/cart">
                        {date.toISOString().substring(0, 10)}
                      </Link>
                    </div>
                    <div className="saved-cart-x">
                      <div className="delete-btn">
                        <CartButton
                          button="remove"
                          cart={cart[1]}
                          cartId={cart[0]}
                          removeCart={this.props.removeCart}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="items-and-button">
                    <div>
                      {Object.values(cart[1]).map(item => (
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
        <button className="saved-cart-delete" onClick={handleClose}>
          X
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
    setCart: payload => {
      dispatch({ type: "SET_CART", payload: payload });
    },

    removeCart: cart => {
      dispatch({ type: "REMOVE_CART", payload: cart });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SavedCarts);
