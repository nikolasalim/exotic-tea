import React from "react";
import { connect } from "react-redux";
import {
  addingItemToCart,
  removingItemToCart
} from "../store/ProductsFeed/actions";

class Cart extends React.Component {
  state = {
    items: []
  };

  render() {
    return (
      <div>
        <h1>Your shopping cart:</h1>
        {this.props.cart.map(product => {
          return (
            <div>
              <h2>{product.name}</h2>
              <img src={product.imageUrl}></img>
              <p>Price: {product.price}</p>
              <p>Quantity: {product.quantity}</p>
              <div>
                <button
                  onClick={() => {
                    this.props.dispatch(addingItemToCart(product.id));
                  }}
                >
                  +
                </button>
                <button
                  onClick={() => {
                    this.props.dispatch(removingItemToCart(product.id));
                  }}
                >
                  -
                </button>
              </div>
            </div>
          );
        })}
        <h1>
          Total price:
          {this.props.cart.length === 0 ? (
            <span> 0</span>
          ) : (
            <span>
              {" "}
              {this.props.cart
                .map(product => product.price)
                .reduce((acc, price) => acc + parseInt(price), 0)}
            </span>
          )}
        </h1>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(Cart);
