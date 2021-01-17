import React, { useContext, useState } from "react";
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
import BackendApi from "../../../helpers/BackendApi";
import { useHistory } from "react-router-dom";
import LoginContext from "../../LoginContext";

export default function FormDialog() {
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
  const { loggedInUser } = useContext(LoginContext);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function submitBlogPostForm({ title, content }) {
      try {
        await BackendApi.createNewBlogPost({ title, content });
      } catch (e) {
        alert(e);
      }
    }
    submitBlogPostForm({ ...formData });
    handleClose();
    history.push(`/u/${loggedInUser.username}`);
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
                placeholder="Title for your new post"
                type="text"
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
  padding-left: 20px;
  margin-bottom: 20px;
`;
