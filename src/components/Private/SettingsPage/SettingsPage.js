import { Box, Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
// import BackendApi from "utils/BackendApi";
import PageLoadedContext from "components/PageLoadedContext";
import PreReleaseNotice from "utils/PreReleaseNotice";
import SettingFormDialog from "./SettingFormDialog";
import SettingsPageList from "./SettingsPageList";
import WorkingPaper from "utils/WorkingPaper";
import ChangeSettingsContext from "./ChangeSettingsContext";

function SettingsPage() {
  document.title = "Forleti Settings";

  const { pageLoaded, setPageLoaded } = useContext(PageLoadedContext);

  useEffect(() => {
    // Scroll to top of the page when loading. Keep here to avoid
    // complications with SettingsFormDialog.
    window.scrollTo(0, 0);
    setPageLoaded(true);
  }, [pageLoaded, setPageLoaded]);

  // STATE FOR CHANGING SETTING DIALOG
  const [changeDialogOpen, setChangeDialogOpen] = useState(false);
  const [setting, setSetting] = useState(["setting_title", "setting"]);

  function handleClickOpen() {
    setChangeDialogOpen(true);
  }

  function handleClose() {
    setChangeDialogOpen(false);
  }

  return (
    <ChangeSettingsContext.Provider
      value={{
        changeDialogOpen,
        handleClickOpen,
        handleClose,
        setting,
        setSetting,
      }}>
      <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 500 } : {})}>
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
      <Grid>
        <SettingFormDialog />
      </Grid>
    </ChangeSettingsContext.Provider>
  );
}

export default SettingsPage;

// STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;
