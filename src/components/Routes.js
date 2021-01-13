import React from "react";
import { Route, Switch } from "react-router-dom";
import BlogPostEditor from "./BlogPost/BlogPostEditor";
import LandingPage from "./LandingPage/LandingPage";

// DEPRACATED: LOGIN/SIGNUP ON HOME PAGE
// import LoginForm from "./AuthForm/AuthFormLogin";
// import SignUpForm from "./AuthForm/AuthFormSignup";

const Routes = () => {
  return (
    <Switch>
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
