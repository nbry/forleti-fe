// prettier-ignore
import { Button, DialogActions, DialogContent, Grid, TextField, } from "@material-ui/core";
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
    category: "account",
    setting: setting.value,
    changeTo: loggedInUser[setting.value],
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
    <StyledGrid container justify="center">
      <form onSubmit={handleSubmit}>
        <DialogContent>
          <TextField
            label={setting.title}
            name="changeTo"
            value={formData.changeTo}
            onChange={handleChange}
            placeholder={"Change " + setting.title + " to..."}
            fullWidth
            type="text"
            required
          />

          <TextField
            label="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter current password to submit change"
            type="password"
            fullWidth
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
