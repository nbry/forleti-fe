import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ProfilePageHeader from "./ProfilePageHeader";
import myColors from "../../static/colors";

function ProfilePage() {
  return (
    <BackgroundWrapper>
      <Grid container direction="row" justify="center">
        <Board>
          <ProfilePageHeader />
        </Board>
      </Grid>
    </BackgroundWrapper>
  );
}

export default ProfilePage;

const BackgroundWrapper = styled.div`
  background-color: ${myColors.background};
  background-attachment: fixed;
  height: 100vh;
`;

const Board = styled.div`
  min-height: 100vh;
  min-width: 400px;
  width: 100vw;
  max-width: 800px;
  background: white;
  border-right: 1px solid #3cf38d;
  border-left: 1px solid #3cf38d;
`;
