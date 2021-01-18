import { Box, Button, Grid, Switch, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import parseSetting from "utils/functions/parseSetting";
import LoginContext from "components/LoginContext";
import ChangeSettingsContext from "./ChangeSettingsContext";

function AccountSetting({ setting }) {
  const { loggedInUser } = useContext(LoginContext);
  const { setSetting, handleClickOpen } = useContext(ChangeSettingsContext);

  return (
    <SettingGrid container direction="row" alignItems="flex-start">
      <StyledBox>
        <Setting variant="h6">{setting[0] ? setting[0] + ":" : null}</Setting>
        <StyledP>{parseSetting(setting[1], loggedInUser)}</StyledP>
      </StyledBox>
      <Box pt={1} mr={1}>
        {/* IF SETTING IS NOT DARK MODE OR REMOVE ACCOUNT, SHOW A BUTTON */}
        {setting[1] !== "dark_mode" && setting[1] !== "remove_account" ? (
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
        {setting[1] === "dark_mode" && <Switch />}

        {/* IF SETTING IS REMOVE ACCOUNT. SHOW A BUTTON */}
        {setting[1] === "remove_account" && (
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
