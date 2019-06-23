import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Grid, GridItem } from "@patternfly/react-core";

import "../style/main.css";

import Navigation from "./Navigation";
import OpenPullRequests from "./stats/OpenPullRequests";
import PullStats from "./stats/PullStats";
import TotalCommitStats from "./stats/TotalCommitStats";
import SoloRefactor from "./stats/SoloRefactor";
import SoloCommits from "./stats/SoloCommits";
import IssuesClosed from "./stats/IssuesClosed";
import ProjectTitle from "./stats/ProjectTitle";
import Languages from "./stats/Languages";
import RepoSize from "./stats/RepoSize";

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
                <div className="pf-c-card__body">
                  <ProjectTitle
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

            <GridItem span={2}>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <OpenPullRequests
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <Languages
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                  />
                </div>
              </div>
            </GridItem>
            <GridItem span={2}>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <IssuesClosed
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                    startDate={this.props.match.params.startDate}
                    endDate={this.props.match.params.endDate}
                  />
                </div>
              </div>
              <div className="pf-c-card">
                <div className="pf-c-card__body">
                  <RepoSize
                    username={this.props.match.params.username}
                    repository={this.props.match.params.repository}
                  />
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
            <GridItem span={12}>
              <div className="pf-c-card">
                <div className="pf-c-card__body" />
              </div>
            </GridItem>
          </Grid>
        </div>
      </div>
    );
  }
}

export default Project;
