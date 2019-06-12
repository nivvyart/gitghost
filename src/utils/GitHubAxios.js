import axios from "axios";

const { clientID, clientSecret } = require("./secrets.json");

const Github = {
  getUserInfo(username) {
    // Return the promise from axios to allow the caller to attach .then handlers as needed.
    return axios.get(
      `https://api.github.com/users/${username}?client_id=${clientID}&client_secret=${clientSecret}`
    );
  },

  getUserRepos(username) {
    return axios.get(
      `https://api.github.com/users/${username}/repos?client_id=${clientID}&client_secret=${clientSecret}`
    );
  },

  getUserRepo(username, repo) {
    return axios.get(
      `https://api.github.com/repos/${username}/${repo}/commits?client_id=${clientID}&client_secret=${clientSecret}`
    );
  }
};

export default Github;
