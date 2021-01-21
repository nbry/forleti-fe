import React, { useContext, useEffect, useState } from "react";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfilePagePosts from "./ProfilePagePosts";
import BackgroundWrapper from "components/BackgroundWrapper";
import BackendApi from "utils/BackendApi";
import { useParams } from "react-router-dom";
import LoginContext from "components/LoginContext";
import styled from "styled-components";
import { Box, Grid, Typography } from "@material-ui/core";

function ProfilePage() {
  const { username } = useParams();
  const [userBeingViewed, setUserBeingViewed] = useState(null);
  const { loggedInUser } = useContext(LoginContext);

  useEffect(() => {
    async function getUserBeingViewed(username) {
      if (username === loggedInUser.username) {
        setUserBeingViewed(loggedInUser);
      } else {
        const res = await BackendApi.getUserByUsername(username);
        if (res.user) {
          setUserBeingViewed(res.user);
        }
      }
    }
    getUserBeingViewed(username);
  }, [username, loggedInUser]);

  return (
    <>
      {userBeingViewed ? (
        <BackgroundWrapper user={userBeingViewed} setContent="profile">
          <ProfilePageHeader userData={userBeingViewed} />
          <ProfilePagePosts userPosts={userBeingViewed.posts} />
        </BackgroundWrapper>
      ) : (
        <BackgroundWrapper user={{ theme: null }} setContent="profile">
          <Grid container justify="center">
            <Box m={7}>
              <Title variant="h2">User {username} Not Found</Title>
            </Box>
          </Grid>
        </BackgroundWrapper>
      )}
    </>
  );
}

export default ProfilePage;

//STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;
