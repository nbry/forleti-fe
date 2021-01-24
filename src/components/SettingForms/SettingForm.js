// prettier-ignore
import { Box, Button, DialogActions, Grid } from "@material-ui/core";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "components/Setting/ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import styled from "styled-components";
import LoginContext from "components/LoginContext";
import { useHistory } from "react-router-dom";
import Account from "./FormContent/Account";
import Bio from "./FormContent/Bio";
import Theme from "./FormContent/Theme";

function SettingForm({ category }) {
  const { setting, handleClose } = useContext(ChangeSettingsContext);
  const { loggedInUser } = useContext(LoginContext);
  const history = useHistory();

  // STATE for form data. Store category, setting value, and changeTo.
  // DEFAULT changeTo to user's current setting.
  // NOTE account settings REQUIRES authentication, which is handled on
  // the backend. ACCOUNT SETTINGS MUST BE SET WITH A CATEGORY OF ACCOUNT!
  const INITIAL_STATE = {
    category,
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
    console.log(formData);
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
        if (res.status === 400) {
          alert(res.message);
        }
        handleClose();
        history.go(0);
      } catch (e) {
        alert(e);
      }
    }
    submitAccountChange({ ...formData });
  }
  return (
    <Grid container justify="center">
      {setting.value === "display_name" && (
        <small>Remaining: {setting.maxLength - formData.changeTo.length}</small>
      )}
      <FullWidthBox>
        <form onSubmit={handleSubmit}>
          {/* THIS IS WHERE FORMS FORM IS BEING CONTENT IS BEING RENDERED */}
          {setting.form === "account" && (
            <Account
              formData={formData}
              handleChange={handleChange}
              setting={setting}
            />
          )}

          {setting.form === "bio" && (
            <Bio
              formData={formData}
              handleChange={handleChange}
              setting={setting}
            />
          )}

          {setting.form === "theme" && (
            <Theme
              formData={formData}
              handleChange={handleChange}
              setting={setting}
            />
          )}

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

export default SettingForm;

// STYLES:
const FullWidthBox = styled(Box)`
  width: 100%;
`;
