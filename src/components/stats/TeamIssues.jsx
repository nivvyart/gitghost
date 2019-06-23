import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

client.query({
  query: gql`
    {
      repository(owner: "octocat", name: "Hello-World") {
        issues(last: 20, states: CLOSED) {
          edges {
            node {
              title
              url
              labels(first: 5) {
                edges {
                  node {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
  `
});
//.then(result => console.log(result));

class TeamIssues extends Component {
  render() {
    return <h1>TeamIssues console.log(20) - Octocat "Hello-World"</h1>;
  }
}

export default TeamIssues;
