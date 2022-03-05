import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import HomePage from "../pages/HomePage/HomePage.jsx";
import PlanPage from "../pages/PlanPage/PlanPage";
import MapPage from "../pages/MapPage/MapPage";

const DashboardRouter = function () {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/plan" component={PlanPage} />
        <Route exact path="/map" component={MapPage} />

        <Redirect to="/" />
      </Switch>
    </Fragment>
  );
};

export default DashboardRouter;
