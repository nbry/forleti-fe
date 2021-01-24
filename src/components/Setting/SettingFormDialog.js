// prettier-ignore
import { Box, Dialog, Grid, DialogTitle, Typography, Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useContext } from "react";
import styled from "styled-components";
import ChangeSettingsContext from "./ChangeSettingsContext";
import SettingForm from "components/SettingForms/SettingForm";
import FormRemoveAccount from "components/SettingForms/FormRemoveAccount";

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
            <Typography variant="h4">
              {setting.value === "remove_account"
                ? "Remove Account"
                : "Change " + setting.title}
            </Typography>
          </DialogTitle>

          <Box textAlign="center">
            <Typography variant="body1">{setting.description}</Typography>
          </Box>

          {/* RENDER SettingForm with category fed into it. IF remove account, render remove account form instead. */}
          {setting.form === "remove_account" ? (
            <FormRemoveAccount />
          ) : (
            <SettingForm category={setting.form} />
          )}
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
