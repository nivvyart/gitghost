import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import {
  Chart,
  ChartAxis,
  ChartGroup,
  ChartLine,
  ChartThemeColor
} from "@patternfly/react-charts";

class TotalCommitStats extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: new Date(props.startDate).toISOString(),
      endDate: props.endDate + "T23:59:59.999Z",
      username: props.username,
      repository: props.repository
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
          defaultBranchRef {
            target {
              ... on Commit {
                history(since: "${this.state.startDate}", until: "${
          this.state.endDate
        }") {
                  nodes {
                    oid
                    committedDate
                    additions
                    deletions
                  }
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
          if (error) return <p>Error </p>;
          let total = 0;
          const points = data.repository.defaultBranchRef.target.history.nodes.map(
            (data, index) => {
              return {
                x: index,
                y: (total += data.additions)
              };
            }
          );

          return (
            <div>
              <p className="h4">Commit Totals</p>
              <div className="line-chart-inline">
                <div className="line-chart-container">
                  <Chart themeColor={ChartThemeColor.blue}>
                    <ChartGroup>
                      <ChartLine data={points} />
                    </ChartGroup>
                    <ChartAxis style={{ tickLabels: { fontSize: 10 } }} />
                    <ChartAxis
                      dependentAxis
                      style={{ tickLabels: { fontSize: 10 } }}
                    />
                  </Chart>
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default TotalCommitStats;
