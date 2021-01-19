import { Box, Button, Grid, Switch, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import parseSetting from "utils/functions/parseSetting";
import PageLoadedContext from "components/PageLoadedContext";
import ChangeSettingsContext from "./ChangeSettingsContext";

function AccountSetting({ setting }) {
  const { loggedInUser } = useContext(PageLoadedContext);
  const { setSetting, handleClickOpen } = useContext(ChangeSettingsContext);

  return (
    <SettingGrid container direction="row" alignItems="flex-start">
      <StyledBox>
        <Setting variant="h6">
          {setting.title ? setting.title + ":" : null}
        </Setting>
        <StyledP>{parseSetting(setting.value, loggedInUser)}</StyledP>
      </StyledBox>
      <Box pt={1} mr={1}>
        {/* IF SETTING IS NOT DARK MODE OR REMOVE ACCOUNT, SHOW A BUTTON */}
        {setting.changeable &&
        (setting.inputType === "text" || setting.inputType === "password") ? (
          <Button
            variant="outlined"
            onClick={() => {
              setSetting(setting);
              handleClickOpen();
            }}>
            Change
          </Button>
        ) : null}

        {/* IF SETTING IS DARK MODE, SHOW A TOGGLE */}
        {setting.value === "dark_mode" && <Switch />}

        {/* IF SETTING IS NOT CURRENTLY CHANGEABLE, SHOW A MESSAGE */}
        {!setting.changeable && <small>Cannot change</small>}

        {/* IF SETTING IS REMOVE ACCOUNT. SHOW A BUTTON */}
        {setting.value === "remove_account" && (
          <Button variant="outlined" color="secondary">
            Delete Your Forleti Account
          </Button>
        )}
      </Box>
    </SettingGrid>
  );
}

export default AccountSetting;

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
