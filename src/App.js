import React from "react";
import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import ProductsFeed from "./components/ProductsFeed";
import Footer from "./components/Footer";
// import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div className="App">
        <NavBar />
      </div>
      <div
        style={{ backgroundColor: "green", width: "100%", height: "400px" }}
      ></div>
      <div>
        <h1>This is the about</h1>
      </div>
      <ProductsFeed />
      <br />
      <Footer />
    </div>
  );
}

export default App;
