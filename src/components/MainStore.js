import React from "react";
import ProductsFeed from "./ProductsFeed";
import "./mainStore.css";

class MainStore extends React.Component {
  state = {};

  render() {
    return (
      <div>
        <div className="hero-banner"></div>
        <div className="about-box"></div>
        <div className="feed-box">
          <ProductsFeed />
        </div>
      </div>
    );
  }
}

export default MainStore;
