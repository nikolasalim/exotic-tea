import React from "react";
import ProductsFeed from "./ProductsFeed";

class MainStore extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="hero-banner"></div>
        <div className="about-box"></div>
        <ProductsFeed />
      </div>
    );
  }
}

export default MainStore;
