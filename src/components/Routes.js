import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import BlogPostEditor from "./Header/NewBlogPost/NewBlogPostEditor";
import LandingPage from "./LandingPage/LandingPage";
import LoginContext from "./LoginContext";
import LoggedInWrapper from "./LoggedInWrapper/LoggedInWrapper";

// DEPRACATED: LOGIN/SIGNUP ON HOME PAGE
// import LoginForm from "./AuthForm/AuthFormLogin";
// import SignUpForm from "./AuthForm/AuthFormSignup";

const Routes = () => {
  const { loggedIn } = useContext(LoginContext);
  return (
    <Switch>
      {/* Not the DRYest code, but keep two explicit sets of routes
      depending on loggedIn context */}

      {loggedIn ? (
        <>
          <Route path="/new">
            <BlogPostEditor />
          </Route>
          <Route path="/home">
            <LoggedInWrapper />
          </Route>
          <Redirect to="/home" />
        </>
      ) : (
        <>
          <Route path="/">
            <LandingPage />
          </Route>
          <Redirect to="/" />
        </>
      )}
    </Switch>
  );
};

export default Routes;
