import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

class SoloCommitStats extends Component {
  constructor(props) {
    super();
    this.state = {
      data: null
    };
  }

  componentDidMount() {
    const username = "nivvyart";
    const repo = "gitghost";

    // Github.getUserRepo(username, repo).then(({ data }) => {
    //   this.setState({ user: data });
    //   console.log(data);
    // });
    Github.getUserRepo(username, repo).then(result => {
      result.data.forEach(commit => {
        axios
          .get(
            `https://api.github.com/repos/${username}/${repo}/commits/${
              commit.sha
            }`
          )
          .then(result => {
            console.log(result.data);
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
