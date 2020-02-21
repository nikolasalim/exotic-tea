import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">
          <p>Home</p>
        </Link>
        <p>About</p>
        <p>Contact</p>
        <Link to="/checkout">
          <p>
            {/* {console.log("logging this.props.cart", this.props.cart)} */}
            Cart:{" "}
            {this.props.cart.length === 0
              ? 0
              : this.props.cart
                  .map(product => product.quantity)
                  .reduce((acc, price) => acc + parseInt(price), 0)}
          </p>
        </Link>
      </div>
    );
  }
}

// (acc, quantity) => acc + quantity, 0)

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(NavBar);
