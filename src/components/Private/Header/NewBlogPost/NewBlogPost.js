// prettier-ignore
import {Button, IconButton, TextField, Dialog, DialogActions } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import CloseIcon from "@material-ui/icons/Close";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import BlogPostEditor from "./NewBlogPostEditor";
import BackendApi from "utils/BackendApi";
import PageLoadedContext from "components/PageLoadedContext";
import myColors from "utils/static/colors";

function NewBlogPost() {
  // Handling opening and closing of dialog:
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // Handling state of the NewBlogPostForm
  const INITIAL_STATE = {
    title: "",
    content: "",
  };

  const [formData, setFormData] = useState(INITIAL_STATE);

  // Listen to changes written on the form and update formData state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Handle form submission
  const history = useHistory();
  const { setPageLoaded , loggedInUser} = useContext(PageLoadedContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function submitBlogPostForm({ title, content }) {
      try {
        await BackendApi.createNewBlogPost({ title, content });
        setFormData(INITIAL_STATE);
        setPageLoaded(false);
        history.push(`/u/${loggedInUser.username}`);
      } catch (e) {
        alert(e);
      }
    }
    submitBlogPostForm({ ...formData });
    handleClose();
  };

  return (
    <>
      <IconButton onClick={handleClickOpen}>
        <SyledAddBoxIcon />
      </IconButton>

      <Dialog
        disableBackdropClick
        disableEscapeKeyDown
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth
        maxWidth={"md"}
        disableEnforceFocus={true}>
        <form onSubmit={handleSubmit}>
          <div style={{ padding: 20, overflow: "hidden" }}>
            <TopRow>
              <CloseButton aria-label="close" onClick={handleClose}>
                <CloseIcon />
              </CloseButton>
              <textarea
                id="content"
                name="content"
                value={formData.content}
                readOnly
                style={{ display: "none" }}></textarea>
              <TextField
                autoFocus
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                label="Title"
                placeholder="Title for your new post (100 character max)"
                type="text"
                inputProps={{ maxLength: 100 }}
                fullWidth
                required
              />
            </TopRow>

            <BlogPostEditor formData={formData} setFormData={setFormData} />
          </div>

          <DialogActions>
            {/* EDIT THESE: */}
            <Button variant="contained" onClick={handleClose} color="secondary">
              Discard
            </Button>
            <Button variant="contained" type="submit" color="primary">
              Submit Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
}

export default NewBlogPost;

// STYLES:
const CloseButton = styled(IconButton)`
  position: absolute;
  right: -2%;
  margin-top: -15px;
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
  padding-right: 100px;
  margin-bottom: 20px;
`;
