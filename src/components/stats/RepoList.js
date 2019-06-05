import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

client
  .query({
    query: gql`
      {
        viewer {
          login
        }
      }
    `
  })
  .then(result => console.log(result));

class RepoList extends Component {
  render() {
    return <h1> Repolist comming soon</h1>;
  }
}

export default RepoList;
