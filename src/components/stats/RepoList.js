import React, { Component } from "react";
import client from "../../utils/GitHubGQL";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

const RepoList = props => (
  <Query
    query={gql`
      {
        user(login: "${props.username}") {
          repositories(last: 5) {
            edges {
              node {
                name
                createdAt
                url
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

      return data.user.repositories.edges.map(({ node }, index) => (
        <tr key={index}>
          <td>{node.name}</td>
          <td>{node.createdAt}</td>
          <td>
            <a target="_blank" href={node.url}>
              Link to external Repo
            </a>
          </td>
        </tr>
      ));
    }}
  </Query>
);

export default RepoList;
