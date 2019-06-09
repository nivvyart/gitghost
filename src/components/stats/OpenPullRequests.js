import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const OpenPullRequests = props => (
  <Query
    query={gql`
      {
        user(login: "${props.username}") {
          repository(name: "${props.repository}") {
            url
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
                  url
                }
              }
            }
          }
        }
      }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      // found a bug here, need to filter by start date and end date

      let startDate = new Date(props.startDate).toISOString();
      let endDate = props.endDate + "T23:59:59.999Z";

      console.log(startDate);
      console.log(endDate);

      return data.user.repository.pullRequests.edges
        .filter(
          ({ node }) => node.createdAt > startDate && node.createdAt < endDate
        )
        .map(({ node }, index) => (
          <div>
            <tr key={index}>
              <td>{node.title}</td>
              <td>{node.url}</td>
              <td>{node.createdAt}</td>
              <td>{index + 1}</td>
            </tr>
          </div>
        ));
    }}
  </Query>
);

export default OpenPullRequests;
