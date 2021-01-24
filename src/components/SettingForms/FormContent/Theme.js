// prettier-ignore
import {  DialogContent, Grid, Radio,
    RadioGroup, FormControlLabel, FormControl, FormLabel, } from "@material-ui/core";
import Brightness1Icon from "@material-ui/icons/Brightness1";
import React from "react";
import profileThemes from "utils/static/profileThemes";
import styled from "styled-components";

function Theme({ formData, handleChange }) {
  return (
    <DialogContent>
      <FullWidthFormControl component="fieldset">
        <FormLabel component="legend" style={{ color: "gray" }}>
          Available Themes
        </FormLabel>
        <RadioGroup
          aria-label="themes"
          name="changeTo"
          value={formData.changeTo.toString()}
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
  );
}

export default Theme;

// STYLES:
const ColorGrid = styled(Grid)`
  border-radius: 10px;
  background: gray;
  width: auto;
`;

const FullWidthFormControl = styled(FormControl)`
  width: 100%;
`;

const StyledFormControlLabel = styled(FormControlLabel)`
  flex-grow: 1;
`;
