import React, { Component } from 'react';

import { Query } from 'react-apollo';
import { gql } from 'apollo-boost';
import client from '../../utils/GitHubGQL';

class SoloRefactor extends Component {
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
    const {
      username,
      repository,
      startDate,
      endDate,
    } = this.state;

    client.query({
      query: gql`
      {
        repository(owner: "${username}", name: "${repository}") {
          defaultBranchRef {
            target {
              ... on Commit {
                history(since: "${startDate}" until: "${endDate}") {
                  nodes {
                    deletions
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
        this.findHighest(result);
      });
  }

  findHighest(data) {
    const testing = {};
    const formatted = data.data.repository.defaultBranchRef.target.history.nodes;

    formatted.forEach((el) => {
      if (el.author.user != null) {
        if (!testing[el.author.user.login]) {
          testing[el.author.user.login] = el.deletions;
        } else {
          testing[el.author.user.login] += el.deletions;
        }
      }
    });
    // eslint-disable-next-line max-len
    const highScoreWinner = Object.keys(testing).reduce((a, b) => (testing[a] > testing[b] ? a : b));
    this.setState({ winner: highScoreWinner });
    this.setState({ highScore: testing[highScoreWinner] });
  }

  render() {
    const { winner } = this.state;
    const { highScore } = this.state;

    return (
      <Query
        query={gql`
          {
            user(login: winner) {
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
                    <img src={data.user.avatarUrl} alt={winner} />
                  </div>
                  <div className="col-md-8 card-body ">
                    <h3 className="font-weight-bold">Refactor King</h3>
                    <a target="_blank" rel="noopener noreferrer" href={data.user.url}>
                      <h5>{winner}</h5>
                    </a>
                    <ul className="list-inline">
                      <li className="list-inline-item">
                        Refactor total:
                        {highScore}
                      </li>
                      <li className="list-inline-item">
                        Followers:
                        {data.user.followers.totalCount}
                      </li>
                      <li className="list-inline-item">
                        Starred Repositories:
                        {' '}
                        {data.user.starredRepositories.totalCount}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            );
          }
        }}
      </Query>
    );
  }
}

export default SoloRefactor;
