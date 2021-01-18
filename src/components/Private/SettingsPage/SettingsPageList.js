import { Typography } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";
import GeneralSetting from "./Setting/GeneralSetting";
import userSettings from "utils/static/userSettings";

function SettingsPageList() {
  return (
    <>
      {/* ACCOUNT SETTINGS */}
      <Category variant="h5">Account</Category>
      {userSettings.account.map((setting) => (
        <GeneralSetting setting={setting} key={setting} />
      ))}

      {/* PROFILE SETTINGS */}
      <Category variant="h5">Profile</Category>
      {userSettings.profile.map((setting) => (
        <GeneralSetting setting={setting} key={setting} />
      ))}

      <Category variant="h5">Other</Category>
    </>
  );
}

export default SettingsPageList;

// STYLES:
const sharedFontStyles = css`
  margin-top: 30px;
  font-family: "Raleway";
`;

const Category = styled(Typography)`
  ${sharedFontStyles}
  margin-top: 40px;
  text-transform: uppercase;
  font-weight: bold;
  letter-spacing: 1px;
`;
