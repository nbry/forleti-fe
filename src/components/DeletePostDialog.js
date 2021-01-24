// prettier-ignore
import { Box, Button, Dialog, DialogActions, DialogContent,
    Grid, DialogTitle, Typography, Avatar } from "@material-ui/core";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import React from "react";
import styled from "styled-components";

function DeletePostDialog({ deleteDialogOpen, handleDeletion, handleClose }) {
  return (
    <Dialog
      open={deleteDialogOpen}
      onClose={handleClose}
      maxWidth={"xs"}
      fullwidth="true"
      aria-labelledby="delete-dialog"
      py={2}>
      <Box my={3}>
        <Grid container direction="column" alignItems="center">
          <StyledAvatar>
            <DeleteForeverIcon />
          </StyledAvatar>
          <DialogTitle disableTypography>
            <Typography variant="h4">Delete Post</Typography>
          </DialogTitle>
          <DialogContent>
            <Box textAlign="center">
              <Typography variant="body1">
                Are you sure you want to delete this post? This can't be undone.
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
              onClick={handleDeletion}
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
  background: #e35050;
`;
