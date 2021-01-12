import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginForm from "./LoginForm/LoginForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
