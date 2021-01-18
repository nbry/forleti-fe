// prettier-ignore
import { Box, Button, Dialog, DialogActions, DialogContent,
    Grid, DialogTitle, Typography, Avatar } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import React, { useContext } from "react";
import styled from "styled-components";
import ChangeSettingsContext from "../ChangeSettingsContext";

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
      <Box my={3}>
        <Grid container direction="column" alignItems="center">
          <StyledAvatar>
            <SettingsIcon />
          </StyledAvatar>
          <DialogTitle disableTypography>
            <Typography variant="h4">Change {setting[0]}</Typography>
          </DialogTitle>
          <DialogContent>
            {/* THIS IS WHERE THE CHANGE SETTINGS FORMS GO.
            SHOULD BE DYNAMIC, BASED ON THE SETTING. */}
            <Box textAlign="center">
              <Typography variant="body1">
                CHANGE STUFF HERE!
              </Typography>
            </Box>
          </DialogContent>

          <DialogActions>
            {/* EDIT THESE: */}
            <Button variant="contained" onClick={handleClose}>
              Cancel
            </Button>
            <Button
              variant="contained"
              // onClick={handleDeletion}
              color="primary">
              Delete
            </Button>
          </DialogActions>
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
