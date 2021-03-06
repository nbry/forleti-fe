import React, { useState, useEffect } from "react";
import LoginContext from "components/LoginContext";
import Header from "components/Header/Header";
import PrivateRoutes from "routes/PrivateRoutes";
import PublicRoutes from "routes/PublicRoutes";
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
      else {
        const res = await BackendApi.request("poke");
        if (res) {
          setLoggedInUser("default");
        }
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
