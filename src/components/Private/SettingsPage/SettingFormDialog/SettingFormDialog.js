// prettier-ignore
import { Box, Dialog, Grid, DialogTitle, Typography, Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useContext } from "react";
import styled from "styled-components";
import ChangeSettingsContext from "../ChangeSettingsContext";
import FormAccount from "./FormAccount";

function DeletePostDialog() {
  const { setting, changeDialogOpen, handleClose } = useContext(
    ChangeSettingsContext
  );

  return (
    <Dialog
      open={changeDialogOpen}
      onClose={handleClose}
      maxWidth={"xs"}
      fullwidth="true"
      aria-labelledby="delete-dialog"
      py={2}>
      <Box m={3}>
        <Grid container direction="column" alignItems="center">
          <StyledAvatar>
            <SettingsIcon />
          </StyledAvatar>
          <DialogTitle disableTypography>
            <Typography variant="h4">Change {setting.title}</Typography>
          </DialogTitle>

          <Box textAlign="center">
            <Typography variant="body1">{setting.description}</Typography>
          </Box>

          {/* THIS IS WHERE THE CHANGE SETTINGS FORMS GO.
            SHOULD BE DYNAMIC, BASED ON THE SETTING. */}
          {setting.form === "account" && <FormAccount />}
        </Grid>
      </Box>
    </Dialog>
  );
}

export default DeletePostDialog;

// STYLES:
const StyledAvatar = styled(Avatar)`
  background: #c44da1;
`;
