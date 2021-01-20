import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import "./App.css";
import PublicRoutes from "./components/Routes/PrivateRoutes";
import PrivateRoutes from "./components/Routes/PublicRoutes";
import BackendApi from "utils/BackendApi";

function App() {
  document.title = "Forleti";

  // [LoginContext] Check if there is a cookie called _token
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("_token") !== null
  );

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  useEffect(() => {
    // Check local storage and set loggedIn state
    if (localStorage.getItem("_token")) {
      setLoggedIn(true);
    } else {
      // Ping the back end when user visits a page.
      // Sometimes deployed apps can "go to sleep" if there's no traffic.
      // The result doesn't matter, so don't handle the promise.
      BackendApi.request("poke");
    }
  }, [loggedIn]);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, logOut }}>
      {!loggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </LoginContext.Provider>
  );
}

export default App;
