import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "components/LandingPage/LandingPage";
import BackgroundWrapper from "../BackgroundWrapper";

const PublicRoutes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LandingPage setBanner="default" />
      </Route>
      <Route exact path="/login">
        <LandingPage setBanner="login" />
      </Route>
      <Route exact path="/signup">
        <LandingPage setBanner="signup" />
      </Route>
      <Route exact path="/u/:username">
        <BackgroundWrapper setContent="profile" />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default PublicRoutes;
