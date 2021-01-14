import React from "react";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import BlogPostEditor from "./NewBlogPostEditor";
// import CloseIcon from "@material-ui/icons/Close";
import styled from "styled-components";
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
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth={"md"}
        PaperComponent={DialogPaper}
      >
        {/* <IconButton aria-label="close" onClick={handleClose}>
          <CloseIcon />
        </IconButton> */}
        <DialogContent>
          <TextField
            autoFocus
            id="title"
            name="title"
            label="Title"
            placeholder="Title for your new post"
            type="text"
            required
          />
          <BlogPostEditor />
        </DialogContent>
        <DialogActions>
          {/* EDIT THESE: */}
          <Button onClick={handleClose} color="primary">
            Discard
          </Button>
          <Button onClick={handleClose} color="primary">
            Submit Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// STYLES:
const DialogPaper = styled(Paper)`
  height: 100%;
`;

const SyledAddBoxIcon = styled(AddBoxIcon)`
  font-size: 2.5rem;
  color: ${myColors.lightRed};
  :hover {
    transition: 50ms;
    color: #f2a4be;
  }
`;
