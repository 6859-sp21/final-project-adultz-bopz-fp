import React from "react";
import App from "./App";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RouterWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path="/app">
          <App />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterWrapper;
