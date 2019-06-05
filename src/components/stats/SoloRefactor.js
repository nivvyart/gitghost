import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

client
  .query({
    query: gql`
      {
        viewer {
          login
        }
      }
    `
  })
  .then(result => console.log(result));

class SoloRefactor extends Component {
  render() {
    return <h1> SoloRefactor</h1>;
  }
}

export default SoloRefactor;
