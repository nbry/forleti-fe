// prettier-ignore
import { Box, Button, DialogActions, DialogContent, Grid, Radio,
  RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import PageLoadedContext from "components/PageLoadedContext";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "../ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import profileThemes from "utils/static/profileThemes";
import styled from "styled-components";

function FormTheme() {
  const { handleClose } = useContext(ChangeSettingsContext);
  const { loggedInUser, setLoggedInUser } = useContext(PageLoadedContext);

  // STATE for form data. Store category, setting value, and changeTo.
  // DEFAULT changeTo to user's current setting.
  // NOTE account settings REQUIRES authentication, which is handled on
  // the backend. ACCOUNT SETTINGS MUST BE SET WITH A CATEGORY OF ACCOUNT!
  const INITIAL_STATE = {
    category: "theme",
    setting: "theme",
    changeTo: loggedInUser.theme.toString() || "",
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
    async function submitThemeChange({
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
    // Before submitting change, change "changeTo" to an integer.
    // It beings as a string because because profileThemes is a JavaScript object,
    // which parse its keys into strings by default. Perhaps refactor to a Map in the future.
    submitThemeChange({ ...formData, changeTo: parseInt(formData.changeTo) });
  }

  return (
    <Grid container direction="column" justify="center" alignItems="center">
      <FullWidthBox>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <FormControl component="fieldset">
              <FormLabel component="legend">Available Themes</FormLabel>
              <RadioGroup
                aria-label="themes"
                name="changeTo"
                value={formData.changeTo}
                onChange={handleChange}>
                {Object.keys(profileThemes).map((themeNumber) => (
                  <Grid
                    container
                    direction="row"
                    alignItems="center"
                    key={profileThemes[themeNumber].value}>
                    <FormControlLabel
                      value={themeNumber}
                      control={<Radio />}
                      label={profileThemes[themeNumber].title}
                    />
                    <Brightness1Icon />
                    <Brightness1Icon />
                  </Grid>
                ))}
              </RadioGroup>
            </FormControl>
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

export default FormTheme;

// STYLES:
const FullWidthBox = styled(Box)`
  width: 100%;
`;
