import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "../page/Home";
import One from "../page/One";
class RouterComponent extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <Route exact path={`/`} component={Home} />
          <Route path={`/one`} component={One} />
        </Fragment>
      </Router>
    );
  }
}
export default RouterComponent;
