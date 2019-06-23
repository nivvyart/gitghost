import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { ChartDonut } from "@patternfly/react-charts";

class IssuesClosed extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: new Date(props.startDate).toISOString(),
      endDate: props.endDate + "T23:59:59.999Z",
      username: props.username,
      repository: props.repository,
      processData: null
    };
  }

  processData(data) {
    if (this.state.processedData) {
      return this.state.processedData;
    }

    let open = 0;
    let newOpen = 0;
    let closedWithinDate = 0;

    const processedData = data.repository.issues.edges.map(({ node }) => {
      if (
        node.state === "OPEN" && //if the issues state is open
        node.createdAt > this.state.startDate && // and the issue is older than the defined window
        node.createdAt < this.state.endDate // and is younger than the defined end date
      ) {
        newOpen++; // add to window opened
      } else if (
        node.state === "OPEN" && // if state is open
        node.createdAt < this.state.startDate //  and is older than the start date
      ) {
        open++;
      } else if (
        node.state === "CLOSED" && // if closed
        node.createdAt > this.state.startDate && // and the issue is older than the defined window
        node.createdAt < this.state.endDate // and is younger than the defined end date) {
      ) {
        closedWithinDate++;
      }
    });

    return {
      openIssues: open - newOpen,
      newIssues: newOpen,
      sprintClosed: closedWithinDate
    };
  }

  render() {
    return (
      <Query
        query={gql`
          {

              repository(owner: "${this.state.username}", name: "${
          this.state.repository
        }") {
                issues(last: 50) {
                  edges {
                    node {
                      state
                      createdAt
                      closedAt
                    }
                  }
                }

            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          {
            var stats = this.processData(data);
          }
          return (
            <div className="donut-chart-inline">
              <div className="donut-chart-container">
                <ChartDonut
                  data={[
                    { x: "Open Issues", y: stats.openIssues },
                    { x: "Open Within Sprint", y: stats.newIssues },
                    { x: "Closed Within Sprint", y: stats.sprintClosed }
                  ]}
                  labels={datum => `${datum.x}: ${datum.y}`}
                  subTitle={stats.newIssues}
                  title="Issues Summary"
                />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default IssuesClosed;
