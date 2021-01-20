// prettier-ignore
import { Box, Button, DialogActions, DialogContent, Grid, TextField, } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "../ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import styled from "styled-components";
import LoginContext from "components/LoginContext";

function FormAccount() {
  const { setting, handleClose } = useContext(ChangeSettingsContext);
  const { loggedInUser, setLoggedIn } = useContext(LoginContext);

  // STATE for form data. Store category, setting value, and changeTo.
  // DEFAULT changeTo to user's current setting.
  // NOTE account settings REQUIRES authentication, which is handled on
  // the backend. ACCOUNT SETTINGS MUST BE SET WITH A CATEGORY OF ACCOUNT!
  const INITIAL_STATE = {
    category: "account",
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
        setLoggedIn(false);
      } catch (e) {
        alert(e);
      }
    }
    submitAccountChange({ ...formData });
  }
  return (
    <Grid container justify="center">
      <FullWidthBox>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <TextField
              label={
                setting.value !== "password" ? setting.title : "New Password"
              }
              name="changeTo"
              value={formData.changeTo}
              onChange={handleChange}
              inputProps={{ maxLength: setting.textConstraint }}
              placeholder={"Change your " + setting.title + " to..."}
              fullWidth
              type={setting.inputType}
              required
            />

            <TextField
              label="Current Password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              inputProps={{ maxLength: setting.textConstraint }}
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
      </FullWidthBox>
    </Grid>
  );
}

export default FormAccount;

// STYLES:
const FullWidthBox = styled(Box)`
  width: 100%;
`;
