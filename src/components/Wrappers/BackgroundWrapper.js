import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BackendApi from "utils/BackendApi";
import Header from "../Private/Header/Header";
import ProfilePage from "../Public/ProfilePage/ProfilePage";
import HomePage from "../Private/HomePage/HomePage";
import SettingsPage from "../Private/SettingsPage/SettingsPage";
import PageLoadedContext from "../PageLoadedContext";
import LoginContext from "../LoginContext";
import parseTheme from "utils/functions/parseTheme";

function BackgroundWrapper({ setContent }) {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const [pageLoaded, setPageLoaded] = useState(false);
  const { loggedIn } = useContext(LoginContext);
  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    // ONLY do this conditional if there IS a cookie AND there is no loggedInUser in state.
    // ONLY use this effect for page reloads and intial login.
    // REMEMBER profiles should be able to be viewed publicly BUT Home and Setting are priate.
    // HOWEVER, Home and Setting use the same BackgroundWrapper as a user's profile.
    async function setAllContext() {
      if (!loggedInUser && localStorage.getItem("_token")) {
        let res = await BackendApi.getLoggedInUser();
        setLoggedInUser(res.user ? res.user : null);
      }
      setPageLoaded(true);
    }
    setAllContext();
  }, [pageLoaded, loggedInUser]);

  // DYNAMIC STYLES OBJECT:
  // This object will change based on user preferences
  const theme = parseTheme(loggedInUser ? loggedInUser.theme : null);

  return (
    <PageLoadedContext.Provider
      value={{ pageLoaded, setPageLoaded, loggedInUser, setLoggedInUser }}>
      {loggedIn && <Header />}

      {/* BACKGROUND COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
      <BackgroundColor
        container
        direction="row"
        justify="center"
        style={{ backgroundColor: theme.background }}>
        {/* BOARD COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
        <Board style={{ backgroundColor: theme.board }}>
          {/* KEEP pageLoaded CONTEXT WITHIN BOARD TO PREVENT RE-RENDER OF VISUALS */}
          {pageLoaded && loggedInUser && setContent === "home" && <HomePage />}
          {pageLoaded && loggedInUser && setContent === "settings" && (
            <SettingsPage />
          )}

          {/* PROFILE PAGE IS PUBLIC, SO loggedInUser context is not required */}
          {pageLoaded && setContent === "profile" && <ProfilePage />}
        </Board>
      </BackgroundColor>
    </PageLoadedContext.Provider>
  );
}

export default BackgroundWrapper;

const BackgroundColor = styled(Grid)`
  background-attachment: fixed;
  height: 100%;
`;

const Board = styled.div`
  min-height: 100vh;
  min-width: 400px;
  padding-bottom: 50px;
  width: 100vw;
  max-width: 800px;
  word-wrap: break-word;
`;
