import { Box, Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import BackendApi from "utils/BackendApi";
import PageLoadedContext from "components/PageLoadedContext";
import PreReleaseNotice from "utils/PreReleaseNotice";
import SettingFormDialog from "./SettingFormDialog/SettingFormDialog";
import SettingsPageList from "./SettingsPageList";
import WorkingPaper from "utils/WorkingPaper";
import ChangeSettingsContext from "./ChangeSettingsContext";

function SettingsPage() {
  document.title = "Forleti Settings";
  window.scrollTo(0, 0);

  const { pageLoaded, setPageLoaded } = useContext(PageLoadedContext);

  useEffect(() => {
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

  async function handleSettingChange() {
    // const res = await BackendApi.deleteBlogPost(targetPostId);
    // if (res) {
    //   handleClose();
    //   setPageLoaded(false);
    // }
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
      <SettingFormDialog />
    </ChangeSettingsContext.Provider>
  );
}

export default SettingsPage;

// STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;
