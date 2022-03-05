import React, { Fragment } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import LoginPage from "../pages/LoginPage/LoginPage";
import SignupPage from "../pages/SignupPage/SignupPage";

const AuthRouter = function () {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/auth/login" component={LoginPage} />
        <Route exact path="/auth/signup" component={SignupPage} />

        <Redirect to="/auth/login" />
      </Switch>
    </Fragment>
  );
};

export default AuthRouter;
