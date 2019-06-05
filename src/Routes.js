import React, { Component } from "react";
import Home from "./components/Home";
import Index from "./components/Index";

import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from "react-router-dom";

class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route path="/index" component={Index} />
      </Router>
    );
  }
}

export default Routes;
