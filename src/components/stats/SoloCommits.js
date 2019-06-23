import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";
import "bootstrap/dist/css/bootstrap.min.css";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

class SoloCommits extends Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
      startDate: new Date(props.startDate).toISOString(),
      endDate: props.endDate + "T23:59:59.999Z",
      username: props.username,
      repository: props.repository,
      winner: "me",
      highScore: 0,
      winnerURL: "http://hi.com"
    };
  }

  findHigest(data) {
    let testing = {};
    console.log(data);
    console.log(data.repository.defaultBranchRef.target.history.nodes.length);

    data.repository.defaultBranchRef.target.history.nodes.forEach(el => {
      if (el.author.user != null) {
        console.log(el.additions);
        console.log(el.author.user.login);
      }
    });
    // if (!testing[el.author]) {
    //     testing[el.author] = el.additions;
    //   } else {
    //     testing[el.author] += el.additions;
    //   }
    // });
    // let winner = Object.keys(testing).reduce((a, b) =>
    //   testing[a] > testing[b] ? a : b
    // );
    // this.setState({ winner: winner });
    // this.setState({ highScore: testing[winner] });
    // this.setState({ winnerURL: "winner" });
  }

  render() {
    return (
      <Query
        query={gql`
          {
            repository(owner: "${this.state.username}", name: "${
          this.state.repository
        }") {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(
                      since: "${this.state.startDate}"
                      until: "${this.state.endDate}"
                    ) {
                      nodes {
                        additions
                        author {
                          user {
                            login
                            url
                            avatarUrl
                            
                            followers {
                              totalCount
                            }
                            starredRepositories {
                              totalCount
                            }
                          }
                        }
                      }
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
          if (error) return <p>Error </p>;

          this.findHigest(data);

          if (data)
            return (
              <div>
                <h1>{this.state.winner}</h1>
                <h2>{this.state.winnerURL}</h2>
              </div>
            );
        }}
      </Query>
    );
  }
}

export default SoloCommits;
