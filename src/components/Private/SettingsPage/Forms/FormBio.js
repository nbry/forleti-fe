// prettier-ignore
import { Button, DialogActions, DialogContent, Grid, TextField } from "@material-ui/core";
import PageLoadedContext from "components/PageLoadedContext";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "../ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import styled from "styled-components";

function FormAccount() {
  const { setting, handleClose } = useContext(ChangeSettingsContext);
  const { loggedInUser, setLoggedInUser } = useContext(PageLoadedContext);

  // STATE for form data. Store category, setting value, and changeTo.
  // DEFAULT changeTo to user's current setting.
  // NOTE account settings REQUIRES authentication, which is handled on
  // the backend. ACCOUNT SETTINGS MUST BE SET WITH A CATEGORY OF ACCOUNT!
  const INITIAL_STATE = {
    category: "profile",
    setting: setting.value,
    changeTo: loggedInUser[setting.value] || "",
    password: "",
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

  // Handle form submission. Reset page if successful
  function handleSubmit(evt) {
    evt.preventDefault();
    async function submitAccountChange({
      category,
      setting,
      changeTo,
      password,
    }) {
      try {
        const res = await BackendApi.changeSetting({
          category,
          setting,
          changeTo,
          password,
        });
        console.log(res);
        handleClose();
        setLoggedInUser(null);
      } catch (e) {
        alert(e);
      }
    }
    submitAccountChange({ ...formData });
  }
  return (
    <StyledGrid
      container
      direction="column"
      justify="center"
      alignItems="center">
      <small>Remaining: {200 - formData.changeTo.length}</small>
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label={setting.value}
            multiline
            rows={7}
            inputProps={{ maxLength: 200 }}
            variant="outlined"
            name="changeTo"
            value={formData.changeTo}
            onChange={handleChange}
            placeholder={"Change your " + setting.title + " to..."}
            fullWidth
            type={setting.inputType}
            required
          />
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="contained" type="submit" color="primary">
            Submit
          </Button>
        </DialogActions>
      </form>
    </StyledGrid>
  );
}

export default FormAccount;

// STYLES:
const StyledGrid = styled(Grid)``;
