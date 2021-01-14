import { Grid, Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ProfilePageHeader from "./ProfilePageHeader";
import PostCard from "./PostCard/PostCard";
import myColors from "../../static/colors";

function ProfilePage() {
  // State for loading profile fade animation:
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    setProfileLoaded(true);
  }, []);

  return (
    <BackgroundWrapper container direction="row" justify="center">
      <Board>
        <Fade in={profileLoaded} {...(profileLoaded ? { timeout: 1500 } : {})}>
          <div>
            <ProfilePageHeader />
            {/* Implement a loop later */}
            <Grid container direction="row" justify="center">
              {/* Implement a loop later */}
              <PostCard />
              <PostCard />
              <PostCard />
              <PostCard />
            </Grid>
          </div>
        </Fade>
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
  /* border-right: 1px solid ${myColors.border};
  border-left: 1px solid ${myColors.border}; */
`;
