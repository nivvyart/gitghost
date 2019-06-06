import React, { Component } from "react";
import ApolloProvider from "react-apollo";
import { Query } from "react-apollo";
import { gql } from "apollo-boost";
import RepoList from "./stats/RepoList";
import { Redirect } from "react-router-dom";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      repository: ""
    };
    this._handleUserChange = this._handleUserChange.bind(this);
    this._handleRepoChange = this._handleRepoChange.bind(this);
    this._selectRepo = this._selectRepo.bind(this);
  }

  _handleUserChange(e) {
    this.setState({ username: e.target.value });
  }

  _handleRepoChange(e) {
    this.setState({ repository: e.target.value });
  }

  _selectRepo(e) {
    const link =
      "/Project/" + this.state.username + "/" + this.state.repository;
    return <Redirect to={link} />;
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Search Users and Repositories</h2>
          <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
              GitHub Username
            </label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">👻</div>
              </div>
              <input
                type="text"
                value={this.state.username}
                onChange={this._handleUserChange}
                className="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="GitHub Username"
              />
            </div>

            <label className="sr-only" htmlFor="inlineFormInputName2">
              Repository
            </label>
            <input
              type="text"
              value={this.state.repository}
              onChange={this._handleRepoChange}
              className="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Repository"
            />

            <button
              type="submit"
              onClick={this._selectRepo}
              className="btn btn-primary mb-2"
            >
              Goto Repo
            </button>
          </form>
          <h4>Repository list</h4>
          <RepoList username={this.state.username} />
        </div>
      </div>
    );
  }
}

export default Search;
