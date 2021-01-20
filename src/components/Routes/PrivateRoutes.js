import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import HomePage from "components/HomePage/HomePage";
import ProfilePage from "components/ProfilePage/ProfilePage";
import SettingsPage from "components/SettingsPage/SettingsPage";

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
