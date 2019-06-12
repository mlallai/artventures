import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
// views
import { HomePage } from "../views";

const Routes = () => {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
      </Switch>
    </Fragment>
  );
};

export default Routes;
