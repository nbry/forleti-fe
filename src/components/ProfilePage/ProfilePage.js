import { Grid, Paper } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import ProfilePageHeader from "./ProfilePageHeader";
import PostCard from "./PostCard/PostCard";
import myColors from "../../static/colors";

function ProfilePage() {
  return (
    <BackgroundWrapper container direction="row" justify="center">
      <Board>
        <ProfilePageHeader />
        {/* Implement a loop later */}
        <Grid container direction="row" justify="center">
          {/* Implement a loop later */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </Grid>
      </Board>
    </BackgroundWrapper>
  );
}

export default ProfilePage;

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
  border-right: 1px solid #3cf38d;
  border-left: 1px solid #3cf38d;
`;
