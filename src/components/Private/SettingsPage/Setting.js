// prettier-ignore
import { Box, Button, Grid, IconButton, Switch, Typography } from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import parseSetting from "utils/functions/parseSetting";
import PageLoadedContext from "components/PageLoadedContext";
import ChangeSettingsContext from "./ChangeSettingsContext";

function AccountSetting({ setting }) {
  const { loggedInUser } = useContext(PageLoadedContext);
  const { setSetting, handleClickOpen } = useContext(ChangeSettingsContext);

  return (
    <Grid container direction="column">
      <Box>
        <TopRow
          container
          direction="row"
          justify="flex-end"
          alignItems="flex-start">
          <StyledBox>
            <Setting variant="h6">
              {setting.title ? setting.title + ":" : null}
            </Setting>
          </StyledBox>
          <Box pt={1} mr={1}>
            {/* IF SETTING IS NOT DARK MODE OR REMOVE ACCOUNT, SHOW A BUTTON */}
            {setting.changeable &&
            (setting.inputType === "text" ||
              setting.inputType === "password") ? (
              <StyledIconButton
                variant="outlined"
                aria-label="edit-button"
                onClick={() => {
                  setSetting(setting);
                  handleClickOpen();
                }}>
                <CreateIcon />
              </StyledIconButton>
            ) : null}

            {/* IF SETTING IS DARK MODE, SHOW A TOGGLE */}
            {setting.changeable && setting.value === "dark_mode" && <Switch />}

            {/* IF SETTING IS NOT CURRENTLY CHANGEABLE, SHOW A MESSAGE */}
            {!setting.changeable && <small>Cannot change*</small>}

            {/* IF SETTING IS REMOVE ACCOUNT. SHOW A BUTTON */}
            {setting.value === "remove_account" && (
              <Button
                color="secondary"
                variant="outlined"
                aria-label="edit-button"
                onClick={() => {
                  setSetting(setting);
                  handleClickOpen();
                }}>
                Delete Your Forleti Account
              </Button>
            )}
          </Box>
        </TopRow>
      </Box>
      <Box>
        <StyledP>{parseSetting(setting.value, loggedInUser)}</StyledP>
      </Box>
    </Grid>
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

const TopRow = styled(Grid)`
  border-top: 1px dotted #a5a5a5;
  margin-top: 20px;
`;

const StyledIconButton = styled(IconButton)`
  padding: 0px;
`;

const StyledP = styled.p`
  margin: 5px;
  max-width: 500px;
  text-indent: 5px;
  font-size: 1.1em;
  color: gray;
`;
const Setting = styled(Typography)`
  ${sharedFontStyles}

  margin: 0px;
`;
