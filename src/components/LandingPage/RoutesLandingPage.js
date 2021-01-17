import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPageBanner from "./LandingPageBanner";

const NotLoggedInRoutes = () => {
  //  Weird name, but name is to notate that user is "not logged in",
  // not necessarily logged out

  return (
    <Switch>
      <Route exact path="/">
        <LandingPageBanner setBanner="default" />
      </Route>
      <Route exact path="/login">
        <LandingPageBanner setBanner="login" />
      </Route>
      <Route exact path="/signup">
        <LandingPageBanner setBanner="signup" />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};

export default NotLoggedInRoutes;
