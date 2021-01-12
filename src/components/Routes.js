import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";
import LoginForm from "./AuthForm/LoginForm";
import SignUpForm from "./AuthForm/SignUpForm";

const Routes = () => {
  return (
    <Switch>
      <Route path="/login">
        <LoginForm />
      </Route>
      <Route path="/signup">
        <SignUpForm />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
