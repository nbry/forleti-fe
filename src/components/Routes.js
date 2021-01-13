import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPost from "./BlogPost/BlogPost";
import LandingPage from "./LandingPage/LandingPage";

// DEPRACATED: LOGIN/SIGNUP ON HOME PAGE
// import LoginForm from "./AuthForm/AuthFormLogin";
// import SignUpForm from "./AuthForm/AuthFormSignup";

const Routes = () => {
  return (
    <Switch>
      <Route path="/new">
        <BlogPost />
      </Route>
      <Route path="/">
        <LandingPage />
      </Route>
    </Switch>
  );
};

export default Routes;
