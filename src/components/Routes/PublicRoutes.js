import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPage from "components/LandingPage/LandingPage";
import ProfilePage from "components/ProfilePage/ProfilePage";

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
        <ProfilePage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default PublicRoutes;
