import React from "react";
import App from "./App";
import About from "./About";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const RouterWrapper = () => {
  return (
    <Router>
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <App />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterWrapper;
