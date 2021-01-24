import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "pages/HomePage";
import ProfilePage from "pages/ProfilePage";
import SettingsPage from "pages/SettingsPage";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <HomePage />
      </Route>
      <Route exact path="/settings">
        <SettingsPage />
      </Route>
      <Route path="/u/:username">
        <ProfilePage />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default LoggedInRoutes;
