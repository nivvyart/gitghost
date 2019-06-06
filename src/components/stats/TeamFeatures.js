import React, { Component } from "react";
import client from "../../utils/GitHubGQL";
import { gql } from "apollo-boost";

client.query({
  query: gql`
    {
      viewer {
        login
      }
    }
  `
});
//.then(result => console.log(result));

class TeamFeatures extends Component {
  render() {
    return <h1> TeamFeatures</h1>;
  }
}

export default TeamFeatures;
