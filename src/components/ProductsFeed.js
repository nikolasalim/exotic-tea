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

  render() {
    return (
      <div>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        {this.props.items.map(product => (
          <SingleItem name={product.name} price={product.price} />
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
