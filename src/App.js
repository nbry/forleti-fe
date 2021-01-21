import React, { useState, useEffect } from "react";
import LoginContext from "components/LoginContext";
import "./App.css";
import Header from "components/Header/Header";
import PrivateRoutes from "components/Routes/PrivateRoutes";
import PublicRoutes from "components/Routes/PublicRoutes";
import BackendApi from "utils/BackendApi";

function App() {
  document.title = "Forleti";

  // [LoginContext] Check if there is a cookie called _token
  const [loggedIn, setLoggedIn] = useState(
    localStorage.getItem("_token") !== null
  );

  // Saving state for loggedInUser (to be used for themes, info, etc.)
  const [loggedInUser, setLoggedInUser] = useState(false);

  const logOut = () => {
    localStorage.clear();
    setLoggedIn(false);
  };

  useEffect(() => {
    async function getLoggedInUser() {
      // Check local storage and set loggedIn state
      // Get loggedInUser. Back end will provide user info based on the token
      if (loggedIn) {
        const res = await BackendApi.getLoggedInUser();
        setLoggedInUser(res.user);
      }
      // Ping the back end when user visits a page.
      // Sometimes deployed apps can "go to sleep" if there's no traffic.
      // The result doesn't matter, so don't handle the promise.
      else {
        BackendApi.request("poke");
        setLoggedInUser("default");
      }
    }
    getLoggedInUser();
  }, [loggedIn]);

  return (
    <>
      {!loggedInUser ? (
        <div>Loading</div>
      ) : (
        <LoginContext.Provider
          value={{
            loggedIn,
            setLoggedIn,
            setLoggedInUser,
            logOut,
            loggedInUser,
          }}>
          {loggedIn ? (
            <>
              <Header />
              <PrivateRoutes />
            </>
          ) : (
            <PublicRoutes />
          )}
        </LoginContext.Provider>
      )}
    </>
  );
}

export default App;
