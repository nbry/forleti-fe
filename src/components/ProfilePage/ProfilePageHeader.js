import styled from "styled-components";
import React from "react";
import { Avatar, Box, Grid } from "@material-ui/core";
import myColors from "../../static/colors";

function ProfilePageHeader() {
  return (
    <HeaderContainer>
      <HeaderImageContainer />
      <AvatarGrid container justify="center">
        <StyledAvatar />
      </AvatarGrid>
      <header>
        <Grid container direction="column" alignItems="center">
          <ProfileName>Testing Username</ProfileName>
          <ProfileDescription>
            I'm a test user. I like books and coffee. My favorite colors are
            navy and sea green. Feel free to DM me about my blogs. WOoh!
          </ProfileDescription>
        </Grid>
      </header>
    </HeaderContainer>
  );
}

export default ProfilePageHeader;

//STYLES
const HeaderContainer = styled.section`
  background: white;
  padding-bottom: 30px;
  margin-bottom: 20px;
  border-bottom: 1px solid ${myColors.border};
`;

const headerImageUrl = `${process.env.PUBLIC_URL + "/assets/blog.jpg"}`;
const HeaderImageContainer = styled.div`
  min-height: 250px;
  width: 100%;
  background-image: url(${headerImageUrl});
  background-repeat: no-repeat;
  background-size: cover;
`;

const ProfileName = styled.h1`
  font-size: 1.8rem;
  font-family: "Raleway";
  margin-top: 0px;
  margin-bottom: 10px;
`;

const ProfileDescription = styled.div`
  min-width: 420px;
  width: 60%;
  text-align: center;
`;

const AvatarGrid = styled(Grid)`
  width: 100%;
`;

const StyledAvatar = styled(Avatar)`
  width: 120px;
  height: 120px;
  margin-top: -85px;
  border: 5px solid white;
`;
