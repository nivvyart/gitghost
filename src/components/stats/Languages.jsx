import React, { Component } from "react";

import { gql } from "apollo-boost";
import { Query } from "react-apollo";

import { ChartPie } from "@patternfly/react-charts";

class Languages extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.username,
      repository: props.repository
    };
  }
  render() {
    return (
      <Query
        query={gql`
          {
            repository(owner: "danger", name: "peril") {
              languages(last: 30) {
                edges {
                  node {
                    id
                    name
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

          const points = data.repository.languages.edges.map(
            ({ node }, index) => {
              return {
                x: node.name,
                y: 1
              };
            }
          );

          return (
            <div>
              <h3>Languages Used</h3>
              <div className="pie-chart-inline">
                <div className="pie-chart-container">
                  <ChartPie
                    data={points}
                    labels={datum => `${datum.x}: ${datum.y}`}
                  />
                </div>
              </div>
            </div>
          );
        }}
      </Query>
    );
  }
}

export default Languages;
