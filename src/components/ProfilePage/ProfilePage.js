import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";

function ProfilePage() {
  return (
    <BackgroundWrapper>
      <Grid container direction="row" justify="center">
        <Board></Board>
      </Grid>
    </BackgroundWrapper>
  );
}

export default ProfilePage;

const BackgroundWrapper = styled.div`
  background-color: #0c0822;
  background-attachment: fixed;
  height: 100vh;
`;

const Board = styled.div`
  min-height: 100vh;
  width: 60%;
  background: white;
`;
