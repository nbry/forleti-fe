import { Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import WorkingPaper from "../../../static/WorkingPaper";
import styled from "styled-components";
import SettingsPageList from "./SettingsPageList";
import PageLoadedContext from "../PageLoadedContext";

function SettingsPage() {
  document.title = "Forleti Settings";
  window.scrollTo(0, 0);

  const { pageLoaded, setPageLoaded } = useContext(PageLoadedContext);

  useEffect(() => {
    setPageLoaded(true);
  }, [pageLoaded, setPageLoaded]);

  return (
    <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 1000 } : {})}>
      <WorkingPaper elevation={10}>
        <Grid container direction="column">
          <Title variant="h2">Settings</Title>
          <SettingsPageList elevation={5} />
        </Grid>
      </WorkingPaper>
    </Fade>
  );
}

export default SettingsPage;

const Title = styled(Typography)`
  font-family: "Raleway";
`;
