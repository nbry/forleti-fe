import { Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BackendApi from "utils/BackendApi";
import Header from "../Private/Header/Header";
import myColors from "utils/static/colors";
import ProfilePage from "../Public/ProfilePage/ProfilePage";
import HomePage from "../Private/HomePage/HomePage";
import SettingsPage from "../Private/SettingsPage/SettingsPage";
import PageLoadedContext from "../PageLoadedContext";
import LoginContext from "../LoginContext";

function BackgroundWrapper({ setContent }) {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const [pageLoaded, setPageLoaded] = useState(false);
  const { loggedIn } = useContext(LoginContext);

  const [loggedInUser, setLoggedInUser] = useState(null);

  useEffect(() => {
    async function setAllContext() {
      if (!loggedInUser) {
        let res = await BackendApi.getLoggedInUser();
        setLoggedInUser(res.user ? res.user : null);
      }
      setPageLoaded(true);
    }
    setAllContext();
  }, [pageLoaded, loggedInUser]);

  return (
    <PageLoadedContext.Provider
      value={{ pageLoaded, setPageLoaded, loggedInUser, setLoggedInUser }}>
      {loggedIn && <Header />}
      <BackgroundColor container direction="row" justify="center">
        <Board>
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
  background-color: ${myColors.background};
  background-attachment: fixed;
  height: 100%;
`;

const Board = styled.div`
  min-height: 100vh;
  min-width: 400px;
  padding-bottom: 50px;
  width: 100vw;
  max-width: 800px;
  background: ${myColors.paper};
  word-wrap: break-word;
`;
