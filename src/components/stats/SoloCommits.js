import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

class SoloCommits extends Component {
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
                author: result.data.author.login,
                additions: result.data.stats.additions
              };
              this.setState({ results: [...this.state.results, data] });
            }
          });
      });
    });
  }

  render() {
    if (!this.state.results) return <p>loading...</p>;
    return (
      <div>
        <h1>Speed Demon</h1>
        <p> some query</p>
      </div>
    );
  }
}

export default SoloCommits;
