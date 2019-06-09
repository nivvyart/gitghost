import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

class SoloCommitStats extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null,
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
            console.log(
              result.data.commit.author.date,
              result.data.author.login,
              result.data.stats.total,
              result.data.stats.additions,
              result.data.stats.deletions
            );
          });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>solocommits</h1>
        <p> check the json log</p>
      </div>
    );
  }
}

export default SoloCommitStats;

// axios.get(`https://api.github.com/repos/${username}/${repo}/commits`).then(result => {
//   result.data.forEach(commit => {
//     axios.get(`/repos/${username}/${repo}/commits/${commit.sha_or_whatever}`).then(result => {
//       console.log(result.data); // Here you should have the info for each commit
//     })
//   })
// });
