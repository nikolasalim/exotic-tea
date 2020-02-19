import React from "react";
import SingleItem from "./SingleItem";

export default class ProductsFeed extends React.Component {
  render() {
    return (
      <div>
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
        <SingleItem />
      </div>
    );
  }
}
