// prettier-ignore
import { Box, Button, DialogActions, DialogContent, Grid, Radio,
  RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import React, { useContext, useState } from "react";
import ChangeSettingsContext from "components/Setting/ChangeSettingsContext";
import BackendApi from "utils/BackendApi";
import profileThemes from "utils/static/profileThemes";
import styled from "styled-components";
import LoginContext from "components/LoginContext";
import { useHistory } from "react-router-dom";

function FormTheme() {
  const { handleClose } = useContext(ChangeSettingsContext);
  const { loggedInUser } = useContext(LoginContext);
  const history = useHistory();

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
  };

  // Handle form submission. Reset page if successful
  function handleSubmit(evt) {
    evt.preventDefault();

    // prettier-ignore
    async function submitThemeChange({
      category, setting, changeTo, password,
    }) {
      try {

        // prettier-ignore
        const res = await BackendApi.changeSetting({
          category, setting, changeTo, password, 
        });
        if (res.status === 400) {
          alert(res.message)
        }
        handleClose();
        history.go(0)
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
            <FullWidthFormControl component="fieldset">
              <FormLabel component="legend" style={{ color: "gray" }}>
                Available Themes
              </FormLabel>
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
                    <StyledFormControlLabel
                      value={themeNumber}
                      control={<Radio />}
                      label={profileThemes[themeNumber].title}
                    />

                    {/* A LITTLE BOX ACTING AS A PREVIEW FOR EACH THEME.
                    HAS TWO ICONS SHOWING THE BACKGROUND AND BOARD COLORS */}
                    <ColorGrid container direction="row" alignItems="center">
                      <Brightness1Icon
                        style={{ color: profileThemes[themeNumber].background }}
                      />
                      <Brightness1Icon
                        style={{ color: profileThemes[themeNumber].board }}
                      />
                    </ColorGrid>
                  </Grid>
                ))}
              </RadioGroup>
            </FullWidthFormControl>
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
const ColorGrid = styled(Grid)`
  border-radius: 10px;
  background: gray;
  width: auto;
`;

const FullWidthFormControl = styled(FormControl)`
  width: 100%;
`;

const FullWidthBox = styled(Box)`
  width: 100%;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  flex-grow: 1;
`;
