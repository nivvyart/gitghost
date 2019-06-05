import React from "react";
import "@patternfly/react-core/dist/styles/base.css";
import { Button } from "@patternfly/react-core";
import { BrowserRouter, Route } from "react-router-dom";
import RepoList from "./components/stats/RepoList";

function GitGhostApp() {
  return (
    <div className="Container">
      <h1>hi</h1>
      <RepoList />
      <Button variant="primary">Button</Button>
    </div>
  );
}

export default GitGhostApp;
