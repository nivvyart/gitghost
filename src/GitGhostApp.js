import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@patternfly/react-core/dist/styles/base.css";
import { Button } from "@patternfly/react-core";
import { BrowserRouter, Route } from "react-router-dom";
import RepoList from "./components/stats/RepoList";
import TeamIssuesFixed from "./components/stats/TeamIssuesFixed";

function GitGhostApp() {
  return (
    <div className="Container">
      <h1>GitGhostApp</h1>
    </div>
  );
}

export default GitGhostApp;
