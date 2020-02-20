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
          <p>Cart: {this.props.cart.length}</p>
        </Link>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(NavBar);
