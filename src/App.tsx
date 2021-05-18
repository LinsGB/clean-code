import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CodeAnalyzer from './pages/CodeAnalyzer'

export default function QueryParamsExample() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={CodeAnalyzer} />
      </Switch>
    </Router>
  );
}
