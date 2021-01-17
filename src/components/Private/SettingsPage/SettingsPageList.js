import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import LoginContext from "../../LoginContext";

function SettingsPageList() {
  const { loggedInUser } = useContext(LoginContext);

  return (
    <>
      <Category variant="h5">Account</Category>
      <SettingGrid container direction="row" alignItems="flex-start">
        <StyledBox>
          <Setting variant="h6">Username:</Setting>
          <StyledP>{loggedInUser.username}</StyledP>
        </StyledBox>
        <Box pt={1} mr={1}>
          <Button variant="outlined">Change</Button>
        </Box>
      </SettingGrid>

      <SettingGrid container direction="row" alignItems="flex-start">
        <StyledBox>
          <Setting variant="h6">Email:</Setting>
          <StyledP>{loggedInUser.email}</StyledP>
        </StyledBox>
        <Box pt={1} mr={1}>
          <Button variant="outlined">Change</Button>
        </Box>
      </SettingGrid>

      <SettingGrid container direction="row" alignItems="flex-start">
        <StyledBox>
          <Setting variant="h6">Password:</Setting>
          <StyledP>******</StyledP>
        </StyledBox>
        <Box pt={1} mr={1}>
          <Button variant="outlined">Change</Button>
        </Box>
      </SettingGrid>

      <Category variant="h5">Profile</Category>
      <div>
        <Setting variant="h6">Bio</Setting>
        <Setting variant="h6">Avatar</Setting>
        <Setting variant="h6">Header Picture</Setting>
      </div>
      <Category variant="h5">Style</Category>
      <div>
        <Setting variant="h6">Background Color</Setting>
        <Setting variant="h6">Board Color</Setting>
        <Setting variant="h6">Dark Mode</Setting>
      </div>
    </>
  );
}

export default SettingsPageList;

// STYLES:
const sharedFontStyles = css`
  margin-top: 30px;
  font-family: "Raleway";
`;

const StyledBox = styled(Box)`
  flex-grow: 1;
`;

const SettingGrid = styled(Grid)`
  border-top: 1px dotted #a5a5a5;
  margin-top: 15px;
`;

const StyledP = styled.p`
  margin: 5px;
  text-indent: 5px;
  font-size: 1.1em;
  color: gray;
`;
const Setting = styled(Typography)`
  ${sharedFontStyles}

  margin: 0px;
`;

const Category = styled(Typography)`
  ${sharedFontStyles}
  margin-top: 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;
