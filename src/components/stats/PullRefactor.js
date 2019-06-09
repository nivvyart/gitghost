import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

client.query({
  query: gql`
    {
      user(login: "Yiannimoustakas") {
        repository(name: "sei31-homework") {
          pullRequests(last: 30) {
            edges {
              node {
                id
                author {
                  login
                }
                title
                createdAt
                closed
                deletions
              }
            }
          }
        }
      }
    }
  `
});
//.then(result => console.log(result));

class PullRefactor extends Component {
  render() {
    return <h1> PullRefactor</h1>;
  }
}

export default PullRefactor;
