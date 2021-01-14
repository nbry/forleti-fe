import styled from "styled-components";
import React from "react";
import { Avatar, Box, Grid } from "@material-ui/core";

function ProfilePageHeader() {
  return (
    <>
      <HeaderImageContainer />
      <AvatarGrid container justify="center">
        <StyledAvatar />
      </AvatarGrid>
      <Grid container justify="center">
        <h1>Testing Username</h1>
      </Grid>
    </>
  );
}

export default ProfilePageHeader;

//STYLES
const headerUrl = `${process.env.PUBLIC_URL + "/assets/blog.jpg"}`;
const HeaderImageContainer = styled.div`
  min-height: 300px;
  width: 100%;
  background-image: url(${headerUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const AvatarGrid = styled(Grid)`
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  width: 150px;
  height: 150px;
  margin-top: -75px;
  border: 5px solid white;
`;
