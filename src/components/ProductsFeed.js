import React from "react";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";
import { fetchProducts, addingItemToCart } from "../store/ProductsFeed/actions";

class ProductsFeed extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.props.dispatch(fetchProducts);
  }

  addingToCart = id => {
    this.props.dispatch(addingItemToCart(id));
  };

  render() {
    // console.log("STATE HERE IS", this.state);
    return (
      <div>
        {this.props.items.map(product => (
          <SingleItem
            id={product.id}
            url={product.imageUrl}
            name={product.name}
            price={product.price}
            addToCart={this.addingToCart}
          />
        ))}
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  // console.log("reduxState is", reduxState);
  // console.log("reduxState.products.list is:", reduxState.products.list);
  // console.log("reduxState.products.cart is:", reduxState.products.cart);
  return {
    items: reduxState.products.list,
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(ProductsFeed);
