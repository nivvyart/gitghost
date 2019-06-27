import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';

class SoloCommits extends Component {
  constructor(props) {
    super();
    this.state = {
      startDate: new Date(props.startDate).toISOString(),
      endDate: `${props.endDate}T23:59:59.999Z`,
      username: props.username,
      repository: props.repository,
      winner: '',
      highScore: 0,
    };
  }

  // eslint-disable-next-line class-methods-use-this
  findHigest(data) {
    const testing = {};
    console.log(data);
    console.log(data.repository.defaultBranchRef.target.history.nodes.length);

    const formatted = data.repository.defaultBranchRef.target.history.nodes;

    formatted.forEach((el) => {
      if (el.author.user != null) {
        if (!testing[el.author.user.login]) {
          testing[el.author.user.login] = el.additions;
        } else {
          // if testing user does exist - add addition to previous user
          testing[el.author.user.login] += el.additions;
        }
        // returns  - { key(username) : object(commit total) }
        console.log(testing);
      }

      // this.setState({ winnerURL: "winner" });
    });
    const winner = Object.keys(testing).reduce((a, b) => (testing[a] > testing[b] ? a : b));

    // returns winner and high score
    console.log('winner, should only happen once', winner, testing[winner]);

    // setting state here crashes react, you cant set the state
    // multiple times from within the render
    // this.setState({ winner: winner });
    // this.setState({ highScore: testing[winner] });

    // i need an object here that has more that winner
    // and commit total so i can use that to build the
    // card, rather than recalling GQL like in the axios example
  }

  render() {
    return (
      <Query
        query={gql`
          {
            repository(owner: "${this.state.username}", name: "${this.state.repository}") {
              defaultBranchRef {
                target {
                  ... on Commit {
                    history(since: "${this.state.startDate}" until: "${this.state.endDate}") {
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

          if (data) {
            return (
              <div>
                <h1>{this.state.winner}</h1>
                <h2>{this.state.highScore}</h2>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default SoloCommits;
