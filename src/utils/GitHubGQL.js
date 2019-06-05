import ApolloClient from "apollo-boost";
import { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: {
    Authorization: "bearer 9319bdcbfe3db8d66b9e7dc9d8162a4b611eefda"
  }
});

export default client;
