import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPostEditor from "./BlogPost/BlogPostEditor";
import LandingPage from "./LandingPage/LandingPage";
import ProfilePage from "./ProfilePage/ProfilePage";

// DEPRACATED: LOGIN/SIGNUP ON HOME PAGE
// import LoginForm from "./AuthForm/AuthFormLogin";
// import SignUpForm from "./AuthForm/AuthFormSignup";

const Routes = () => {
  return (
    <Switch>

      {/* CHANGE AT PRODUCTION: this may be erroneous because it acts as a catch-all */}
      <Route path="/:username">
        <ProfilePage />
      </Route>
      <Route path="/new">
        <BlogPostEditor />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
