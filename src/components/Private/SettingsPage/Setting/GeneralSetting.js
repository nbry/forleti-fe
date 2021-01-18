import { Box, Button, Grid, Typography } from "@material-ui/core";
import React, { useContext } from "react";
import styled, { css } from "styled-components";
import parseSetting from "utils/functions/parseSetting";
import LoginContext from "components/LoginContext";

function AccountSetting({ setting }) {
  const { loggedInUser } = useContext(LoginContext);

  return (
    <SettingGrid container direction="row" alignItems="flex-start">
      <StyledBox>
        <Setting variant="h6">{setting[0]}:</Setting>
        <StyledP>{parseSetting(setting[1], loggedInUser)}</StyledP>
      </StyledBox>
      <Box pt={1} mr={1}>
        <Button variant="outlined">Change</Button>
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
