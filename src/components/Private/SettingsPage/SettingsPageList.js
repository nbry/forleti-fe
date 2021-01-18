import { Typography } from "@material-ui/core";
import React from "react";
import styled, { css } from "styled-components";
import Setting from "./Setting";
import userSettings from "utils/static/userSettings";

function SettingsPageList() {
  return (
    <>
      {/* Map through userSettings array */}
      {userSettings.map((setting_group) => (
        <div key={setting_group.category}>
          <Category variant="h5">{setting_group.category}</Category>

          {/* Map through each settings category values*/}
          {setting_group.settings.map((setting) => (
            <Setting setting={setting} key={setting.value} />
          ))}
        </div>
      ))}
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
