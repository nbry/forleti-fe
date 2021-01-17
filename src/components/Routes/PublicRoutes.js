import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import LandingPageWrapper from "../Wrappers/LandingPageWrapper";

const NotLoggedInRoutes = () => {
  //  Weird name, but name is to notate that user is "not logged in",
  // not necessarily logged out

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
      <Redirect to="/" />
    </Switch>
  );
};

export default NotLoggedInRoutes;
