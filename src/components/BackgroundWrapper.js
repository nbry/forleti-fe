import { Fade, Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import parseTheme from "utils/functions/parseTheme";
import WorkingPaper from "utils/WorkingPaper";

function BackgroundWrapper({ user, children, setContent }) {
  // Store the state for the loading a page and forcing a re-render of a component
  // within the loggedInWrapper WHILE avoiding a re-render of the BackgroundWrapper and Board
  const theme = parseTheme(user.theme);
  const [fadeStart, setFadeStart] = useState(false);

  useEffect(() => {
    setFadeStart(true);
  }, []);

  return (
    <>
      {/* BACKGROUND COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
      <BackgroundColor
        container
        direction="row"
        justify="center"
        style={{ backgroundColor: theme.background }}>
        {/* BOARD COLOR WILL CHANGE BASED OFF OF RESULT OF parseTheme */}
        <Board style={{ backgroundColor: theme.board }}>
          {/* HISTORY and SETTINGS routes share the same background. Fade within the background */}
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