import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

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
      results: [],
      startDate: new Date(props.startDate).toISOString(),
      endDate: props.endDate + "T23:59:59.999Z",
      username: props.username,
      repository: props.repository
    };
  }

  componentDidMount() {
    const username = this.state.username;
    const repository = this.state.repository;

    Github.getUserRepo(username, repository).then(result => {
      result.data.forEach(commit => {
        axios
          .get(
            `https://api.github.com/repos/${username}/${repository}/commits/${
              commit.sha
            }`
          )
          .then(result => {
            let data;
            if (
              result.data.commit.author.date > this.state.startDate &&
              result.data.commit.author.date < this.state.endDate
            ) {
              data = {
                author: result.data.commit.author.login,
                stats: result.data.stats.total
              };
              this.setState({ results: [...this.state.results, data] });
            }
          });
      });
    });
  }

  render() {
    if (!this.state.results) return <p>loading...</p>;
    let total = 0;
    const points = this.state.results.map((data, index) => {
      return {
        name: "commits",
        x: index,
        y: (total += data.stats)
      };
    });

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
  }
}

export default TotalCommitStats;
