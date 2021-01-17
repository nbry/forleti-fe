import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import "./App.css";
import BackendApi from "./helpers/BackendApi";
import PublicRoutes from "./components/Routes/PrivateRoutes";
import PrivateRoutes from "./components/Routes/PublicRoutes";

function App() {
  document.title = "Forleti";

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
      value={{ loggedIn, setLoggedIn, logOut, loggedInUser }}>
      {!loggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </LoginContext.Provider>
  );
}

export default App;
