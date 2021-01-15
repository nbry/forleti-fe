import { Grid, Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProfilePageHeader from "./ProfilePageHeader";
import PostCard from "./PostCard/PostCard";

function ProfilePage() {
  // State for loading profile fade animation:
  const [profileLoaded, setProfileLoaded] = useState(false);

  useEffect(() => {
    setProfileLoaded(true);
  }, []);

  return (
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
  );
}

export default ProfilePage;
