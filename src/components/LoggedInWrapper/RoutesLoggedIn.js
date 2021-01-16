import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <div>Welcome to Home Page</div>
      </Route>
      <Route exact path="/settings">
        <div>Welcome to Settings Page</div>
      </Route>
      <Route path="/u/:username">
        <ProfilePage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default LoggedInRoutes;
