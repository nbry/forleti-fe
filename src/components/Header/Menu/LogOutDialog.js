// prettier-ignore
import { Box, Button, Dialog, DialogActions, DialogContent, MenuItem,
  Grid, DialogTitle, Typography, Avatar } from "@material-ui/core";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
import React, { useContext } from "react";
import styled from "styled-components";
import LoginContext from "components/LoginContext";
import { useHistory } from "react-router-dom";

function LogOutDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Prevent Dialog from closing when pressing Tab:
  const stopPropagationForTab = (event) => {
    if (event.key === "Tab") {
      event.stopPropagation();
    }
  };

  // Log Out Functionality
  const { logOut } = useContext(LoginContext);
  const history = useHistory();
  function handleLogOut(event) {
    handleClose(event);
    logOut();
    history.push("/");
  }

  return (
    <>
      <MenuItem onClick={handleClickOpen}>Logout</MenuItem>
      <Dialog
        open={open}
        onClose={handleClose}
        onKeyDown={stopPropagationForTab}
        maxWidth={"xs"}
        fullwidth="true"
        aria-labelledby="simple-dialog"
        py={2}>
        <Box my={3}>
          <Grid container direction="column" alignItems="center">
            <StyledAvatar>
              <ExitToAppRoundedIcon />
            </StyledAvatar>
            <DialogTitle disableTypography>
              <Typography variant="h4">Log out of Forleti?</Typography>
            </DialogTitle>
            <DialogContent>
              <Box textAlign="center">
                <Typography variant="body1">
                  You can always log back in any time you'd like. Come back and
                  visit again soon!
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
                onClick={handleLogOut}
                color="primary">
                Log Out
              </Button>
            </DialogActions>
          </Grid>
        </Box>
      </Dialog>
    </>
  );
}

export default LogOutDialog;

// STYLES:
const StyledAvatar = styled(Avatar)`
  background: #e35050;
`;
