import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BackgroundWrapper from "../Wrappers/BackgroundWrapper";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <BackgroundWrapper setContent="home" />
      </Route>
      <Route exact path="/settings">
        <BackgroundWrapper setContent="settings" />
      </Route>
      <Route path="/u/:username">
        <BackgroundWrapper setContent="profile" />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default LoggedInRoutes;
