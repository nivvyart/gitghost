import React, { Component } from "react";
import RepoList from "./stats/RepoList";

import "bootstrap/dist/css/bootstrap.min.css";
import "@patternfly/react-core/dist/styles/base.css";

import OpenPullRequests from "./stats/OpenPullRequests";
import PullAddition from "./stats/PullAddition";
import PullRefactor from "./stats/PullRefactor";
import SoloCommitStats from "./stats/SoloCommitStats";

//check out moment.js

class Project extends Component {
  render() {
    return (
      <div className="project-container">
        <div className="pf-l-grid pf-m-gutter">
          <div className="pf-l-grid__item pf-m-8-col">
            This is the project screen date range
            {this.props.match.params.startDate} =>
            {this.props.match.params.endDate}
          </div>
          <div className="pf-l-grid__item pf-m-4-col pf-m-2-row">
            <OpenPullRequests
              username={this.props.match.params.username}
              repository={this.props.match.params.repository}
              startDate={this.props.match.params.startDate}
              endDate={this.props.match.params.endDate}
            />
          </div>
          <div className="pf-l-grid__item pf-m-2-col pf-m-3-row">
            2 col, 3 row
          </div>
          <div className="pf-l-grid__item pf-m-2-col">2 col</div>
          <div className="pf-l-grid__item pf-m-4-col">
            <img src="http://fillmurray.com/400/400" alt="" />
          </div>
          <div className="pf-l-grid__item pf-m-2-col">2 col</div>
          <div className="pf-l-grid__item pf-m-2-col">2 col</div>
          <div className="pf-l-grid__item pf-m-2-col">2 col</div>
          <div className="pf-l-grid__item pf-m-4-col">4 col</div>
          <div className="pf-l-grid__item pf-m-2-col">2 col</div>
          <div className="pf-l-grid__item pf-m-4-col">4 col</div>
          <div className="pf-l-grid__item pf-m-4-col">4 col</div>
        </div>
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
