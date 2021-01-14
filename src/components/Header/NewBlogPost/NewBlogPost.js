import React from "react";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import BlogPostEditor from "./NewBlogPostEditor";
import styled, { css } from "styled-components";
import myColors from "../../../static/colors";

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <SyledAddBoxIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">New Post</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            name="title"
            label="Title"
            type="email"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="subtitle"
            name="subtitle"
            label="Subtitle"
            type="email"
            fullWidth
          />
          <BlogPostEditor />
        </DialogContent>
        <DialogActions>
          {/* EDIT THESE: */}
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleClose} color="primary">
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// STYLES:
const SyledAddBoxIcon = styled(AddBoxIcon)`
  font-size: 2.5rem;
  color: ${myColors.lightRed};
  :hover {
    transition: 50ms;
    color: #f2a4be;
  }
`;
