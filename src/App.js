import React, { useState, useEffect } from "react";
import LoginContext from "./components/LoginContext";
import "./App.css";
import PublicRoutes from "./components/Routes/PrivateRoutes";
import PrivateRoutes from "./components/Routes/PublicRoutes";

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
    if (localStorage.getItem("_token")) {
      setLoggedIn(true);
    }
  }, [loggedIn]);

  return (
    <LoginContext.Provider value={{ loggedIn, setLoggedIn, logOut }}>
      {!loggedIn ? <PrivateRoutes /> : <PublicRoutes />}
    </LoginContext.Provider>
  );
}

export default App;
