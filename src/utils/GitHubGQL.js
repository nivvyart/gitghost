import ApolloClient from "apollo-boost";
// import { gql } from "apollo-boost";

const { token } = require("./secrets.json");

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: `bearer ${token}`
  }
});

export default client;
