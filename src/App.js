import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import MainStore from "./components/MainStore";
import { Switch, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path="/checkout" component={Cart} />
          <Route path="/" component={MainStore} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
