import React from "react";
import { Bullseye } from "@patternfly/react-core";

class Home extends React.Component {
  constructor(props) {
    super();
    this.state = {};
  }

  render() {
    return (
      <Bullseye>
        <div className="padding-top">
          <div className="card text-center">
            <div className="card-body">
              <h1 className="h1">Welcome to GitGhost</h1>
              <img src={require("./image.png")} alt="" />

              <p className="card-text">
                Search GitHub Users and repositories to get insite into your
                projects!
              </p>

              <a href="#/search" className="btn btn-primary">
                Start Ghosting!
              </a>
            </div>
          </div>
        </div>
      </Bullseye>
    );
  }
}

export default Home;
