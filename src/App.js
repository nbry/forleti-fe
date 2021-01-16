import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import Routes from "./components/Routes";
import Header from "./components/Header/Header";
import "./App.css";
import BackendApi from "./helpers/BackendApi";

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
    <>
      <LoginContext.Provider
        value={{ loggedIn, setLoggedIn, logOut, loggedInUser }}
      >
        <Header />
        <Routes />
      </LoginContext.Provider>
    </>
  );
}

export default App;
