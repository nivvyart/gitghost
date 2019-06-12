import React, { Component } from "react";
import moment from "moment";

import RepoList from "./stats/RepoList";
import Navigation from "./Navigation";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      repository: "",
      startDate: moment().format("YYYY-MM-DD"),
      endDate: moment()
        .add(5, "d")
        .format("YYYY-MM-DD")
    };
    this._handleUserChange = this._handleUserChange.bind(this);
    this._handleRepoChange = this._handleRepoChange.bind(this);
    this._handleStartDateChange = this._handleStartDateChange.bind(this);
    this._handleEndDateChange = this._handleEndDateChange.bind(this);
    this._selectRepo = this._selectRepo.bind(this);
  }

  _handleUserChange(e) {
    this.setState({ username: e.target.value });
  }

  _handleRepoChange(e) {
    this.setState({ repository: e.target.value });
  }

  _handleStartDateChange(e) {
    this.setState({ startDate: e.target.value });
  }

  _handleEndDateChange(e) {
    this.setState({ endDate: e.target.value });
  }

  //need to add a default search value here if those fields are not added.
  _selectRepo() {
    this.props.history.push(
      `/project/${this.state.username}/${this.state.repository}/${
        this.state.startDate
      }/${this.state.endDate}`

      //this.props.match.params.usernmae/repo
    );
  }

  render() {
    return (
      <div>
        <Navigation />

        <div className="container">
          <h2 className="h2 padding-top">Search Users and Repositories</h2>
          <form className="form-inline">
            <label className="sr-only" htmlFor="inlineFormInputGroupUsername2">
              GitHub Username
            </label>
            <div className="input-group mb-2 mr-sm-2">
              <div className="input-group-prepend">
                <div className="input-group-text">
                  <span>👻</span>
                </div>
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

            <input
              className="form-control mb-2 mr-sm-2"
              type="date"
              min="2016-01-01"
              value={this.state.startDate}
              onChange={this._handleStartDateChange}
            />
            <input
              className="form-control mb-2 mr-sm-2"
              type="date"
              value={this.state.endDate}
              onChange={this._handleEndDateChange}
            />

            <button
              type="submit"
              className="btn btn-primary mb-2"
              onClick={this._selectRepo}
              onChange={this._handleRepoChange}
            >
              Goto Repo
            </button>
          </form>
          <h4>Repository list</h4>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Created At</th>
                <th scope="col">External Link</th>
              </tr>
            </thead>
            <tbody>
              <RepoList username={this.state.username} />
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Search;
