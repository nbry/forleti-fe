import { Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import WorkingPaper from "../../../static/WorkingPaper";
import styled from "styled-components";
import LoginContext from "../../LoginContext";
import PageLoadedContext from "../PageLoadedContext";

function SettingsPage() {
  console.log("RENDERING SETTINGS");
  const { loggedInUser } = useContext(LoginContext);
  const { pageLoaded, setPageLoaded } = useContext(PageLoadedContext);

  useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded, setPageLoaded]);

  return (
    <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 1000 } : {})}>
      <WorkingPaper elevation={10}>
        <Grid container>
          <Title variant="h2">{loggedInUser.username}'s Settings</Title>
        </Grid>
      </WorkingPaper>
    </Fade>
  );
}

export default SettingsPage;

const Title = styled(Typography)`
  font-family: "Raleway";
`;
