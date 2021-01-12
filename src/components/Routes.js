import React from "react";
import { Route, Switch } from "react-router-dom";
import LandingPage from "./LandingPage/LandingPage";

const Routes = () => {
  return (
    <Switch>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
