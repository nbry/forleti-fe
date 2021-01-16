import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfilePage from "./ProfilePage/ProfilePage";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <div>Welcome to home Page</div>
      </Route>
      <Route path="/u/:username">
        <ProfilePage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default LoggedInRoutes;
