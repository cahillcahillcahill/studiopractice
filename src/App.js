import React, { Component } from "react";
import { Header } from "./components/Header.jsx";
import Router from "./Router";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Header />
        <div className="page-view">
          <Router />
        </div>
      </div>
    );
  }
}

export { App };
