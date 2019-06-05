import React, { Component } from "react";

class Index extends Component {
  constructor() {
    super();

    this.state = {
      username: "",
      repository: "",
      repos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ username: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div>
          <h2>Search Users and Repositories</h2>
          <form class="form-inline">
            <label class="sr-only" for="inlineFormInputGroupUsername2">
              GitHub Username
            </label>
            <div class="input-group mb-2 mr-sm-2">
              <div class="input-group-prepend">
                <div class="input-group-text">👻</div>
              </div>
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleChange}
                class="form-control"
                id="inlineFormInputGroupUsername2"
                placeholder="GitHub Username"
              />
            </div>

            <label class="sr-only" for="inlineFormInputName2">
              Repository
            </label>
            <input
              type="text"
              class="form-control mb-2 mr-sm-2"
              id="inlineFormInputName2"
              placeholder="Repository"
            />

            <button type="submit" class="btn btn-primary mb-2">
              Goto Repo
            </button>
          </form>
          <h4>Repository list</h4>
          <ul class="list-group">
            {this.state.repos.map((item, i) => (
              <li className="list-group-item list-group-item-action" key={i}>
                {this.state.repos[i]}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Index;
