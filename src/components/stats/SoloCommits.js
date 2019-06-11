import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

class SoloCommits extends Component {
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
              result.data.stats.additions
            );
          });
      });
    });
  }

  render() {
    return (
      <div>
        <h1>Speed Demon</h1>
        <p> some query</p>
      </div>
    );
  }
}

export default SoloCommits;

// axios.get(`https://api.github.com/repos/${username}/${repo}/commits`).then(result => {
//   result.data.forEach(commit => {
//     axios.get(`/repos/${username}/${repo}/commits/${commit.sha_or_whatever}`).then(result => {
//       console.log(result.data); // Here you should have the info for each commit
//     })
//   })
// });
