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
        <div>
          <div className="card text-center">
            <div className="card-body">
              <h1 className="card-title">Welcome to GitGhost</h1>
              <img src={require("./image.png")} alt="" />

              <p className="card-text">
                With supporting text below as a natural lead-in to additional
                content.
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
