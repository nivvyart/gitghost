import React, { Component } from "react";
import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import {
  Chart,
  ChartBar,
  ChartStack,
  ChartThemeColor,
  ChartThemeVariant,
  ChartAxis
} from "@patternfly/react-charts";

class PullStats extends Component {
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
      <div className="stack-chart-container">
        <p className="h5">Pull Requests Total</p>
        <Query
          query={gql`
                    {

                        repository(owner: "${this.state.username}", name: "${
            this.state.repository
          }") {
                          pullRequests(last: 30) {
                            edges {
                              node {
                                id
                                author {
                                  login
                                }
                                createdAt
                                additions
                                deletions
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
            return (
              <Chart
                themeColor={ChartThemeColor.multi}
                themeVariant={ChartThemeVariant.light}
              >
                <ChartStack domainPadding={{ x: [10, 2] }} horizontal>
                  {data.repository.pullRequests.edges
                    .filter(
                      ({ node }) =>
                        node.createdAt > this.state.startDate &&
                        node.createdAt < this.state.endDate
                    )
                    .map(({ node }, index) => (
                      <ChartBar
                        key={index}
                        data={[
                          { x: node.author.login, y: node.additions },
                          { x: node.author.login, y: node.deletions }
                        ]}
                      />
                    ))}
                </ChartStack>
                <ChartAxis
                  style={{ tickLabels: { padding: 1, fontSize: 9 } }}
                />
                <ChartAxis
                  dependentAxis
                  style={{ tickLabels: { fontSize: 10 } }}
                />
              </Chart>
            );
          }}
        </Query>
      </div>
    );
  }
}

export default PullStats;

//
// </ChartAxis>
