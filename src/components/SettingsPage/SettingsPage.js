import { Box, Fade, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import PreReleaseNotice from "utils/PreReleaseNotice";
import SettingFormDialog from "./SettingFormDialog";
import SettingsPageList from "./SettingsPageList";
import WorkingPaper from "utils/WorkingPaper";
import ChangeSettingsContext from "./ChangeSettingsContext";
import BackgroundWrapper from "components/BackgroundWrapper";
import LoginContext from "components/LoginContext";

function SettingsPage() {
  const { loggedInUser } = useContext(LoginContext);

  useEffect(() => {
    // Scroll to top of the page when loading. Keep here to avoid
    // complications with SettingsFormDialog.
    document.title = "Forleti Settings";
    window.scrollTo(0, 0);
  }, []);

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
    <BackgroundWrapper user={loggedInUser} setContent="settings">
      <ChangeSettingsContext.Provider
        value={{
          changeDialogOpen,
          handleClickOpen,
          handleClose,
          setting,
          setSetting,
        }}>
       
          <Grid container direction="column">
            <Title variant="h2">Settings</Title>
            <SettingsPageList elevation={5} />
          </Grid>
          <Box mt={5}>
            <small>*These features will be implemented shortly!</small>
          </Box>
          <Box mt={2}>
            <PreReleaseNotice />
          </Box>
    
        <Grid>
          <SettingFormDialog />
        </Grid>
      </ChangeSettingsContext.Provider>
    </BackgroundWrapper>

    // <ChangeSettingsContext.Provider
    //   value={{
    //     changeDialogOpen,
    //     handleClickOpen,
    //     handleClose,
    //     setting,
    //     setSetting,
    //   }}>
    //   <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 500 } : {})}>
    //     <WorkingPaper elevation={10}>
    //       <Grid container direction="column">
    //         <Title variant="h2">Settings</Title>
    //         <SettingsPageList elevation={5} />
    //       </Grid>
    //       <Box mt={5}>
    //         <small>*These features will be implemented shortly!</small>
    //       </Box>
    //       <Box mt={2}>
    //         <PreReleaseNotice />
    //       </Box>
    //     </WorkingPaper>
    //   </Fade>
    //   <Grid>
    //     <SettingFormDialog />
    //   </Grid>
    // </ChangeSettingsContext.Provider>
  );
}

export default SettingsPage;

// STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;
