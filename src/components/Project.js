import React, { Component } from "react";
import RepoList from "./stats/RepoList";
import OpenPullRequests from "./stats/OpenPullRequests";

//check out moment.js

class Project extends Component {
  render() {
    return (
      <div className="container">
        <h1>This will be the project screen</h1>
        <OpenPullRequests
          username={this.props.match.params.username}
          repository={this.props.match.params.repository}
        />
      </div>
    );
  }
}

export default Project;
