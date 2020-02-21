import React from "react";
import "./singleItem.css";

export default class SingleItem extends React.Component {
  submitHandler = () => {
    this.props.addToCart(this.props.id);
  };

  render() {
    return (
      <div className="single-item">
        <img src={this.props.url}></img>
        <p>{this.props.name}</p>
        <p>{this.props.price}</p>
        <button onClick={this.submitHandler}>Add to Cart</button>
      </div>
    );
  }
}
