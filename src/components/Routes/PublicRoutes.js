import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPageWrapper from "../Wrappers/LandingPageWrapper";
import BackgroundWrapper from "../Wrappers/BackgroundWrapper";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPageWrapper setBanner="default" />
      </Route>
      <Route exact path="/login">
        <LandingPageWrapper setBanner="login" />
      </Route>
      <Route exact path="/signup">
        <LandingPageWrapper setBanner="signup" />
      </Route>
      <Route exact path="/u/:username">
        <BackgroundWrapper setContent="profile" />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default PublicRoutes;
