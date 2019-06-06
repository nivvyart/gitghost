import React, { Component } from "react";
import RepoList from "./stats/RepoList";

class Project extends Component {
  render() {
    return (
      <div className="container">
        <h1>This will be the project screen</h1>
        <RepoList />
      </div>
    );
  }
}

export default Project;
