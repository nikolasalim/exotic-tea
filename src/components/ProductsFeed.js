import React from "react";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";
import { fetchProducts } from "../store/ProductsFeed/actions";

class ProductsFeed extends React.Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.props.dispatch(fetchProducts);
    // fetchProducts
  }

  addingToCart = id => {
    // if (id === this.state.items.id) {
    //   // console.log("ITS WORKING for this id:", id);
    // }
    console.log("ITS WORKINnnG for this id", id);
  };

  render() {
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
  // console.log("reduxState.products is:", reduxState);
  return {
    items: reduxState.products.list
  };
}

export default connect(mapStateToProps)(ProductsFeed);
