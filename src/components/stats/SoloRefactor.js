import React, { Component } from "react";
import axios from "axios";
import Github from "../../utils/GitHubAxios";

import { Query } from "react-apollo";
import { gql } from "apollo-boost";

class SoloRefactor extends Component {
  constructor(props) {
    super();
    this.state = {
      results: [],
      startDate: new Date(props.startDate).toISOString(),
      endDate: props.endDate + "T23:59:59.999Z",
      username: props.username,
      repository: props.repository,
      winner: "",
      highScore: 0
    };
  }

  componentDidMount() {
    const username = this.state.username;
    const repository = this.state.repository;

    const requests = [];

    Github.getUserRepo(username, repository).then(result => {
      result.data.forEach(commit => {
        requests.push(
          axios
            .get(
              `https://api.github.com/repos/${username}/${repository}/commits/${
                commit.sha
              }`
            )
            .then(result => {
              let data;
              if (
                result.data.commit.author.date > this.state.startDate &&
                result.data.commit.author.date < this.state.endDate
              ) {
                data = {
                  author: result.data.author.login,
                  deletions: result.data.stats.deletions
                };
                this.setState({ results: [...this.state.results, data] });
              }
            })
        );
      });
      Promise.all(requests).then(() => {
        // TODO: call findHighest
        this.findHigest();
      });
    });
  }

  findHigest() {
    let testing = {};

    this.state.results.forEach(el => {
      if (!testing[el.author]) {
        testing[el.author] = el.deletions;
      } else {
        testing[el.author] += el.deletions;
      }
    });
    let winner = Object.keys(testing).reduce((a, b) =>
      testing[a] > testing[b] ? a : b
    );
    this.setState({ winner: winner });
    this.setState({ highScore: testing[winner] });
  }

  render() {
    if (!this.state.results) return <p>loading...</p>;
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

          if (data)
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
        }}
      </Query>
    );
  }
}

export default SoloRefactor;
