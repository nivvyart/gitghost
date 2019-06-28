import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import client from '../../utils/GitHubGQL';

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

  componentDidMount() {
    const { username } = this.state;
    const { repository } = this.state;

    client.query({
      query: gql`
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
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }`,
    })
      .then((result) => {
        this.findHigest(result);
      });
  }

  // eslint-disable-next-line class-methods-use-this
  findHigest(data) {
    const testing = {};
    const formatted = data.data.repository.defaultBranchRef.target.history.nodes;

    formatted.forEach((el) => {
      if (el.author.user != null) {
        if (!testing[el.author.user.login]) {
          testing[el.author.user.login] = el.additions;
        } else {
          // if testing user does exist - add addition to previous user
          testing[el.author.user.login] += el.additions;
        }
      }
    });
    const highScoreWinner = Object.keys(testing).reduce((a, b) => (testing[a] > testing[b] ? a : b));
    this.setState({ winner: highScoreWinner });
    this.setState({ highScore: testing[highScoreWinner] });
  }

  render() {
    return (
      <Query
        query={gql`
          {
            user(login: "${this.state.winner}") {
              avatarUrl
              url

              followers {
                totalCount
              }
              starredRepositories {
                totalCount
              }
            }
          }
        `}
      >
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error </p>;

          if (data) {
            return (
              <div>
                <div className="row mt-3 border">
                  <div className="col-md-4 ">
                    <img src={data.user.avatarUrl} alt={this.state.winner} />
                  </div>
                  <div className="col-md-8 card-body ">
                    <h3 className="font-weight-bold">Refactor King</h3>
                    <a target="_blank" href={data.user.url}>
                      <h5>{this.state.winner}</h5>
                    </a>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        Refactor total: {this.state.highScore}
                      </li>
                      <li className="list-inline-item">
                        Followers: {data.user.followers.totalCount}
                      </li>
                      <li className="list-inline-item">
                        Starred Repositories:{" "}
                        {data.user.starredRepositories.totalCount}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        }
        }
      </Query>
    );
  }
}

export default SoloCommits;
