import React, { useContext, useEffect, useState } from "react";
import ProfilePageHeader from "components/Profile/ProfilePageHeader";
import ProfilePagePosts from "components/Profile/ProfilePagePosts";
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

  // GET username from URL parameter. If the username matches the logged in user, simply set the user being viewed
  // as the logged in user.  If it's not, send a request to the back end. Search for the user by username. If a
  // result is returned, set the user being viewed as the result of the search.
  // This effect also sets the document's title as {username}'s blog.
  useEffect(() => {
    async function getUserBeingViewed(username) {
      let user = null;
      if (username === loggedInUser.username) {
        setUserBeingViewed(loggedInUser);
        user = loggedInUser;
      } else {
        const res = await BackendApi.getUserByUsername(username);
        if (res && res.user) {
          setUserBeingViewed(res.user);
          user = res.user;
        }
      }
      document.title = user ? `${user.username}'s Blog` : "No One Found";
    }
    getUserBeingViewed(username);
  }, [username, loggedInUser]);

  return (
    <>
      {/* IF there is a user to be viewed, render the profile page header and the user's posts.
    Send the user as a prop to BackgroundWrapper to render the user's theme. In other words,
    visiting another user's profile will render their profile with their chosen theme. */}
      {userBeingViewed ? (
        <BackgroundWrapper user={userBeingViewed} setContent="profile">
          <ProfilePageHeader userData={userBeingViewed} />
          <ProfilePagePosts userPosts={userBeingViewed.posts} />
        </BackgroundWrapper>
      ) : (
        // If no user is found, show a default "Not Found" page.
        <BackgroundWrapper user={{ theme: null }} setContent="profile">
          <Grid container justify="center">
            <StyledBox m={7}>
              <Title variant="h2">User Not Found</Title>
            </StyledBox>
          </Grid>
        </BackgroundWrapper>
      )}
    </>
  );
}

export default ProfilePage;

//STYLES:
const StyledBox = styled(Box)`
  width: auto;
  word-wrap: break-word;
`;

const Title = styled(Typography)`
  font-family: "Raleway";
`;
