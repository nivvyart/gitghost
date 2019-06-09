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
                additions
              }
            }
          }
        }
      }
    }
  `
});
//.then(result => console.log(result));

class PullAddition extends Component {
  render() {
    return <h1> PullAddition</h1>;
  }
}

export default PullAddition;
