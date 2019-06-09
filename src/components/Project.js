import React, { Component } from "react";
import RepoList from "./stats/RepoList";

import OpenPullRequests from "./stats/OpenPullRequests";
import PullAddition from "./stats/PullAddition";
import PullRefactor from "./stats/PullRefactor";
import SoloCommitStats from "./stats/SoloCommitStats";

//check out moment.js

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <h1>This will be the project screen</h1>
        <OpenPullRequests
          username={this.props.match.params.username}
          repository={this.props.match.params.repository}
          startDate={this.props.match.params.startDate}
          endDate={this.props.match.params.endDate}
        />
      </div>
      // <PullAddition
      //   username={this.props.match.params.username}
      //   repository={this.props.match.params.repository}
      //   startDate={this.props.match.params.startDate}
      //   endDate={this.props.match.params.endDate}
      // />
      // <PullRefactor
      //   username={this.props.match.params.username}
      //   repository={this.props.match.params.repository}
      //   startDate={this.props.match.params.startDate}
      //   endDate={this.props.match.params.endDate}
      // />
      // <SoloCommitStats
      //   username={this.props.match.params.username}
      //   repository={this.props.match.params.repository}
      //   startDate={this.props.match.params.startDate}
      //   endDate={this.props.match.params.endDate}
      // />
    );
  }
}

export default Project;
