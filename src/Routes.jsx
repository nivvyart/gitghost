import React, { Component } from 'react';
import { ApolloProvider } from 'react-apollo';

import { HashRouter as Router, Route } from 'react-router-dom';


import Home from './components/Home';
import Search from './components/Search';
import Project from './components/Project';
import Profile from './components/Profile';
import client from './utils/GitHubGQL';


class Routes extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route
            path="/project/:username/:repository/:startDate/:endDate"
            component={Project}
          />
          <Route path="/profile" component={Profile} />
        </Router>
      </ApolloProvider>
    );
  }
}

export default Routes;
