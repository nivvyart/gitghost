import React, { Component } from "react";
import { ChartDonutUtilization } from "@patternfly/react-charts";

import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

class RepoSize extends Component {
  constructor(props) {
    super();
    this.state = {
      username: props.username,
      repository: props.repository,
      dataUsage: 0,
      dataPercent: 0
    };
  }

  componentDidMount() {
    client
      .query({
        query: gql`
          {
            repository(owner: "${this.state.username}", name: "${
          this.state.repository
        }") {
              diskUsage
            }
          }
        `
      })
      .then(result => {
        let data = 0;
        let dataPercent = 0;
        data = result.data.repository.diskUsage / 1000;
        dataPercent = (data / 1020) * 100;

        this.setState({ dataUsage: data.toFixed(2) });
        this.setState({ dataPercent: dataPercent });
      });
  }

  render() {
    return (
      <div>
        Disk Usage
        <div className="donut-utilization-chart">
          <ChartDonutUtilization
            data={{ x: "MB's capacity", y: this.state.dataPercent }}
            labels={datum => (datum.x ? `${datum.x} - ${datum.y}%` : null)}
            subTitle="of 1024 MB"
            title={this.state.dataUsage}
          />
        </div>
      </div>
    );
  }
}

export default RepoSize;
