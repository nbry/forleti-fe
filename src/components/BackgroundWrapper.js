import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import styled from "styled-components";
import Header from "./Header/Header";
import LoginContext from "./LoginContext";
import parseTheme from "utils/functions/parseTheme";

function BackgroundWrapper({ user, children }) {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const { loggedIn } = useContext(LoginContext);
  const theme = parseTheme(user.theme);

  return (
    <>
      {/* SHOW HEADER IF THERE IS A LOGGED IN USER */}
      {loggedIn && <Header />}

      {/* BACKGROUND COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
      <BackgroundColor
        container
        direction="row"
        justify="center"
        style={{ backgroundColor: theme.background }}>
        {/* BOARD COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
        <Board style={{ backgroundColor: theme.board }}>{children}</Board>
      </BackgroundColor>
    </>
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
