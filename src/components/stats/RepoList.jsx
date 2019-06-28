import React, { Component } from "react";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";

import moment from "moment";

const RepoList = props => (
  <Query
    pollInterval={500}
    query={gql`
                {
                  user(login: "${props.username}") {
                    repositories(last: 10) {
                      edges {
                        node {
                          id
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
      if (error) return <p>Please use the search function above</p>;

      return data.user.repositories.edges.map(({ node }, index) => (
        <tr key={index}>
          <td>{index + 1}</td>
          <td>{node.name}</td>
          <td>{moment(node.createdAt).format("HH:mm, Do MMMM YYYY")}</td>
          <td>
            <a target="_blank" href={node.url}>
              Link
            </a>
          </td>
        </tr>
      ));
    }}
  </Query>
);

export default RepoList;
