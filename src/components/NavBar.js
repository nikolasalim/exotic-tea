import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./navBar.css";

class NavBar extends React.Component {
  render() {
    return (
      <div className="nav-box">
        <Link to="/" className="nav-item">
          <p className="nav-item">Home</p>
        </Link>
        <p className="nav-item">About</p>
        <p className="nav-item">Contact</p>
        <Link to="/checkout" className="nav-item">
          <p className="nav-item">
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

function mapStateToProps(reduxState) {
  return {
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(NavBar);
