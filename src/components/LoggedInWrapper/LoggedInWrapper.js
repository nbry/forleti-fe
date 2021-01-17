import { Grid } from "@material-ui/core";
import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import myColors from "../../static/colors";
import LoggedInRoutes from "./RoutesLoggedIn";
import PageLoadedContext from "./PageLoadedContext";

function LoggedInWrapper() {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const [pageLoaded, setPageLoaded] = useState(false);

  return (
    <PageLoadedContext.Provider value={{ pageLoaded, setPageLoaded }}>
      <Header />
      <BackgroundWrapper container direction="row" justify="center">
        <Board>
          <LoggedInRoutes />
        </Board>
      </BackgroundWrapper>
    </PageLoadedContext.Provider>
  );
}

export default LoggedInWrapper;

const BackgroundWrapper = styled(Grid)`
  background-color: ${myColors.background};
  background-attachment: fixed;
  height: 100%;
`;

const Board = styled.div`
  min-height: 100vh;
  min-width: 400px;
  padding-bottom: 100px;
  width: 100vw;
  max-width: 800px;
  background: ${myColors.paper};
`;
