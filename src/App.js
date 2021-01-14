import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import Routes from "./components/Routes";
import Header from "./components/Header/Header";
import "./App.css"

function App() {
  // [LoginContext] CHECK IF USER IS LOGGED IN
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("_token") !== null
  );

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  useEffect(() => {
    if (localStorage.getItem("_token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);
  // [END LoginCOntext]

  return (
    <>
      <LoginContext.Provider value={{ loggedIn, setLoggedIn, logOut }}>
        <Header />
        <Routes />
      </LoginContext.Provider>
    </>
  );
}

export default App;
