import styled from "styled-components";
import React from "react";
import { Avatar, Grid } from "@material-ui/core";
import myColors from "utils/static/colors";

function ProfilePageHeader({ userData }) {
  return (
    <HeaderContainer>
      <HeaderImageContainer />
      <AvatarGrid container justify="center">
        <StyledAvatar />
      </AvatarGrid>
      <header>
        <Grid container direction="column" alignItems="center">
          <ProfileName aria-label="display name">{userData.display_name}</ProfileName>
          <ProfileUserName aria-label="username">@{userData.username}</ProfileUserName>
          <ProfileBio aria-label="bio">
            {userData.bio ? userData.bio : <p aria-label="bio">No Bio</p>}
          </ProfileBio>
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
  font-size: 2rem;
  font-family: "Raleway";
  margin-top: 0px;
  margin-bottom: 0px;
`;

const ProfileBio = styled.div`
  min-width: 420px;
  width: 60%;
  text-align: center;
  margin-top: 10px;
`;

const ProfileUserName = styled.small`
  color: gray;
  font-size: 1rem;
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
