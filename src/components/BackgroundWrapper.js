import { Fade, Grid } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import parseTheme from "utils/functions/parseTheme";
import WorkingPaper from "utils/WorkingPaper";
import Header from "./Header/Header";
import LoginContext from "./LoginContext";

function BackgroundWrapper({ user, children, setContent }) {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const theme = parseTheme(user.theme);
  const [fadeStart, setFadeStart] = useState(false);
  const { loggedIn } = useContext(LoginContext);

  useEffect(() => {
    setFadeStart(true);
  }, []);

  return (
    <>
      {/* A MODIFIED HEADER WILL BE SHOWN WHEN VISITING PROFILES WHILE LOGGED OUT.
      THE HEADER WILL NOT HAVE AN ACCOUNT MENU, AND WILL REFLECT THE THEME OF THE USER BEING VIEWED */}
      {!loggedIn && <Header theme={theme} />}

      {/* BACKGROUND COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
      <BackgroundColor
        container
        direction="row"
        justify="center"
        style={{ backgroundColor: theme.background }}>
        {/* BOARD COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
        <Board style={{ backgroundColor: theme.board }}>
          {/* HOME and SETTINGS routes share the same background. Fade within the background */}
          {setContent !== "profile" ? (
            <WorkingPaper>
              <Fade in={fadeStart} {...(fadeStart ? { timeout: 300 } : {})}>
                <div>{children}</div>
              </Fade>
            </WorkingPaper>
          ) : (
            <Fade in={fadeStart} {...(fadeStart ? { timeout: 500 } : {})}>
              <div>{children}</div>
            </Fade>
          )}
        </Board>
      </BackgroundColor>
    </>
  );
}

export default BackgroundWrapper;

// STYLES:

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
