import React, { Component } from "react";
import Home from "./components/Home";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

class Routes extends Compoenent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
      </Router>
    );
  }
}
