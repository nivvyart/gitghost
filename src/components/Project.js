import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, GridItem, Button } from "@patternfly/react-core";

import "../style/main.css";

import Navigation from "./Navigation";
import OpenPullRequests from "./stats/OpenPullRequests";
import PullStats from "./stats/PullStats";
import TotalCommitStats from "./stats/TotalCommitStats";
import SoloRefactor from "./stats/SoloRefactor";
import SoloCommits from "./stats/SoloCommits";
import IssuesClosed from "./stats/IssuesClosed";

//check out moment.js

class Project extends Component {
  render() {
    return (
      <div>
        <Navigation />

        <div className="project-container">
          <Grid gutter="md">
            <GridItem span={6}>
              <div className="pf-c-card">
                1. span = 6
                <div className="pf-c-card__body">
                  This is the project screen for{" "}
                  {this.props.match.params.repository} date range
                  {this.props.match.params.startDate} =>
                  {this.props.match.params.endDate}
                </div>
              </div>
            </GridItem>
            <GridItem span={3}>
              <div className="pf-c-card">
                2. span = 3
                <div className="pf-c-card__body">
                  <SoloCommits
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={3}>
              <div className="pf-c-card">
                3. span = 3
                <div className="pf-c-card__body">
                  <SoloRefactor
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={4} rowSpan={1}>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <TotalCommitStats
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={4}>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <img src="http://fillmurray.com/400/400" alt="" />
                </div>
              </div>
            </GridItem>
            <GridItem span={4} rowSpan={1}>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <PullStats
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={2}>
              <div className="pf-c-card">
                8. span = 2
                <div className="pf-c-card__body">
                  <OpenPullRequests
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={2}>
              <div className="pf-c-card">
                9. span = 2
                <div className="pf-c-card__body">
                  <IssuesClosed
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={2}>
              <div className="pf-c-card">
                10. span = 2
                <div className="pf-c-card__body">
                  <img src="http://fillmurray.com/400/400" alt="" />
                </div>
              </div>
            </GridItem>
            <GridItem span={4}>11. span = 4</GridItem>
            <GridItem span={2}>
              <div className="pf-c-card">
                12. span = 2
                <div className="pf-c-card__body">
                  <img src="http://fillmurray.com/400/400" alt="" />
                </div>
              </div>
            </GridItem>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Project;
