import { Grid } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ProfilePage from "./ProfilePage/ProfilePage";
import myColors from "../../static/colors";

function LoggedInWrapper() {
  return (
    <BackgroundWrapper container direction="row" justify="center">
      <Board>
        <ProfilePage />
      </Board>
    </BackgroundWrapper>
  );
}

export default LoggedInWrapper;

const BackgroundWrapper = styled(Grid)`
  background-color: ${myColors.background};
  background-attachment: fixed;
  height: 100%;
`;

const Board = styled.div`
  min-height: 100vh;
  min-width: 400px;
  padding-bottom: 100px;
  width: 100vw;
  max-width: 800px;
  background: ${myColors.paper};
`;