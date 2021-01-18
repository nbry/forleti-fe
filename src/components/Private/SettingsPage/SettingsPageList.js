import { Typography } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";
import Setting from "./Setting";
import userSettings from "utils/static/userSettings";

function SettingsPageList() {
  return (
    <>
      {/* ACCOUNT SETTINGS */}
      <Category variant="h5">Account</Category>
      {userSettings.account.map((setting) => (
        <Setting setting={setting} key={setting[1]} />
      ))}

      {/* PROFILE SETTINGS */}
      <Category variant="h5">Profile</Category>
      {userSettings.profile.map((setting) => (
        <Setting setting={setting} key={setting[1]} />
      ))}

      {/* OTHER SETTINGS */}
      <Category variant="h5">Other</Category>
      <Setting setting={userSettings.other[0]} key="dark_mode" />

      {/* REMOVE ACCOUNT */}
      <Category variant="h5">Delete Account</Category>
      <Setting setting={userSettings.remove_account[0]} key="remove_account" />
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
