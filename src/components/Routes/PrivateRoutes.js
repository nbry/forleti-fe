import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import ProfileWrapper from "../Wrappers/ProfileWrapper";
// import HomePage from "../LoggedInWrapper/HomePage/HomePage";
// import ProfilePage from "../Public/ProfilePage/ProfilePage";
// import SettingsPage from "../LoggedInWrapper/SettingsPage/SettingsPage";

const LoggedInRoutes = () => {
  return (
    <Switch>
      <Route exact path="/home">
        <ProfileWrapper setContent="home" />
      </Route>
      <Route exact path="/settings">
        <ProfileWrapper setContent="settings" />
      </Route>
      <Route path="/u/:username">
        <ProfileWrapper setContent="profile" />
      </Route>
      <Redirect to="/home" />
    </Switch>
  );
};

export default LoggedInRoutes;
