import { React, useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { firebase } from "../firebase/firebase";

import { login } from "../redux/auth/authActions";
import { startLoadingPlansAction } from "../redux/plans/plansActions";

import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import AuthRouter from "./AuthRouter";
import Dashboard from "./../components/Dashboard/Dashboard";

export const AppRouter = () => {
  const dispatch = useDispatch();

  const [checking, setChecking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user?.uid) {
        // En nuestros componentes deberíamos realizar dispatch de acciones generalmente
        dispatch(login(user.uid, user.displayName));
        setIsLoggedIn(true);

        dispatch(startLoadingPlansAction(user.uid));
      } else {
        setIsLoggedIn(false);
      }

      setChecking(false);
    }); // Crea un 'observable': tipo de objeto especial que se puede disparar más de una vez
  }, [dispatch, setChecking, setIsLoggedIn]);

  if (checking) {
    return <h1>Wait...</h1>;
  }

  return (
    <Router>
      <Switch>
        <PublicRoute
          path="/auth"
          isAuthenticated={isLoggedIn}
          component={AuthRouter}
        />

        <PrivateRoute
          path="/"
          isAuthenticated={isLoggedIn}
          component={Dashboard}
        />

        <Redirect to="/auth/login" />
      </Switch>
    </Router>
  );
};
