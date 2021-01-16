import React from "react";
import {
  Button,
  IconButton,
  TextField,
  Dialog,
  DialogActions,
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import BlogPostEditor from "./NewBlogPostEditor";
import CloseIcon from "@material-ui/icons/Close";
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
      >
        <div style={{ padding: 20, overflow: "hidden" }}>
          <TopRow>
            <CloseButton aria-label="close" onClick={handleClose}>
              <CloseIcon />
            </CloseButton>

            <TextField
              autoFocus
              id="title"
              name="title"
              label="Title"
              placeholder="Title for your new post"
              type="text"
              required
            />
          </TopRow>
          <BlogPostEditor />
        </div>

        <DialogActions>
          {/* EDIT THESE: */}
          <Button variant="contained" onClick={handleClose} color="secondary">
            Discard
          </Button>
          <Button variant="contained" onClick={handleClose} color="primary">
            Submit Post
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

// STYLES:
const CloseButton = styled(IconButton)`
  position: absolute;
  right: 0%;
`;

const SyledAddBoxIcon = styled(AddBoxIcon)`
  font-size: 2.5rem;
  color: ${myColors.lightRed};
  :hover {
    transition: 50ms;
    color: #f2a4be;
  }
`;

const TopRow = styled.div`
  position: relative;
  width: 100%;
  padding-left: 20px;
  margin-bottom: 20px;
`;
