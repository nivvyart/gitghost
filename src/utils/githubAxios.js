import axios from "axios";

const Github = {
  getUserInfo(username) {
    // Return the promise from axios to allow the caller to attach .then handlers as needed.
    return axios.get(
      `https://api.github.com/users/${username}?client_id=<clientID>&client_secret=<client secret>`
    );
  },

  getUserRepos(username) {
    return axios.get(
      `https://api.github.com/users/${username}/repos?client_id=<clientID>&client_secret=<client secret>`
    );
  }
};

export default Github;
