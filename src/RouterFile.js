import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from "./App";
import SinglePage from "./components/SinglePage/SinglePage";
export default class RouterFile extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route to="/" component={App} />
          <Route to="/watch" component={SinglePage} />
        </Switch>
      </Router>
    );
  }
}
