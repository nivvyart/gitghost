import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import { ChartDonut } from "@patternfly/react-charts";

class OpenPullRequests extends Component {
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
    let closed = 0;

    const processedData = data.user.repository.pullRequests.edges
      .filter(
        ({ node }) =>
          node.createdAt > this.state.startDate &&
          node.createdAt < this.state.endDate
      )
      .map(({ node }) => {
        if (node.closed) {
          closed++;
        } else {
          open++;
        }
      });
    return { openRequests: open, closedRequests: closed };
  }

  render() {
    return (
      <Query
        query={gql`
        {
          user(login: "${this.state.username}") {
            repository(name: "${this.state.repository}") {
              url
              pullRequests(last: 30) {
                edges {
                  node {
                    id
                    author {
                      login
                    }

                    createdAt
                    closed

                  }
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
                    { x: "Open Requests", y: stats.openRequests },
                    { x: "Closed Requests", y: stats.closedRequests }
                  ]}
                  labels={datum => `${datum.x}: ${datum.y}`}
                  subTitle={stats.openRequests}
                  title="Pull Requests"
                />
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default OpenPullRequests;
