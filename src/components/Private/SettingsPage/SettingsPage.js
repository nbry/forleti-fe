import { Box, Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import SettingsPageList from "./SettingsPageList";
import PageLoadedContext from "components/PageLoadedContext";
import PreReleaseNotice from "utils/PreReleaseNotice";
import WorkingPaper from "utils/WorkingPaper";

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
        <Box mt={5}>
          <PreReleaseNotice />
        </Box>
      </WorkingPaper>
    </Fade>
  );
}

export default SettingsPage;

// STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;