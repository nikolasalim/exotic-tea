import React from "react";
import SingleItem from "./SingleItem";
import { connect } from "react-redux";
import { fetchProducts, addingItemToCart } from "../store/ProductsFeed/actions";
import "./productsFeed.css";

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
    return (
      <div className="feed-box">
        {/* <form>
          <input type="text" value="Search"></input>
        </form> */}

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
  // console.log("reduxState.products.list is:", reduxState.products.list);
  // console.log("reduxState.products.cart is:", reduxState.products.cart);
  return {
    items: reduxState.products.list,
    cart: reduxState.products.cart
  };
}

export default connect(mapStateToProps)(ProductsFeed);

/*
        thoughts:
        should we do this in another component?
        can we search on the navbar and then filter the products feed to only show the matching results?

        possible plan:
        step1: include the form html;
        step2: get the value of the input;
        step3: map over this.props.cart and get the product.name;
        step4: add the conditional. Maybe using .include() since both values will be strings?
                if(this.props.cart.map(product => product.name).includes(//search input value// === true){
                  return <p> product.name </p>
                })
        step5: print out the products which return "true"
      */
