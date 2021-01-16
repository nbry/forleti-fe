import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import Header from "./components/Header/Header";
import "./App.css";
import BackendApi from "./helpers/BackendApi";
import LoggedInWrapper from "./components/LoggedInWrapper/LoggedInWrapper";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
  // [LoginContext] CHECK IF USER IS LOGGED IN
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("_token") !== null
  );

  // State storage for some user data (username, bio, etc.)
  const [loggedInUser, setLoggedInUser] = useState({});

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  useEffect(() => {
    async function provideLoggedInUserContext() {
      if (localStorage.getItem("_token")) {
        let res = await BackendApi.getLoggedInUser();
        setLoggedInUser(res.user);
      }
    }
    provideLoggedInUserContext();
  }, [loggedIn]);
  // [END LoginCOntext]

  return (
    <LoginContext.Provider
      value={{ loggedIn, setLoggedIn, logOut, loggedInUser }}
    >
      <Header />
      {loggedIn ? <LoggedInWrapper /> : <LandingPage />}
    </LoginContext.Provider>
  );
}

export default App;
