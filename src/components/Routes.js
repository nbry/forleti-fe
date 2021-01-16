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
  const { loggedIn, loggedInUser } = useContext(LoginContext);

  return (
    <>
      {/* Not the DRYest code, but keep two explicit sets of SWITCH routes
      depending on loggedIn context */}

      {loggedIn ? (
        <Switch>
          <Route exact path="/home">
            <div>Welcome to home Page</div>
          </Route>
          <Route path="/u/:username">
            <LoggedInWrapper />
          </Route>
          <Redirect to="/home" />
        </Switch>
      ) : (
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Redirect to="/" />
        </Switch>
      )}
    </>
  );
};

export default Routes;
