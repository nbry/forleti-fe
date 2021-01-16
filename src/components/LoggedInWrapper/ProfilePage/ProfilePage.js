import { Grid, Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProfilePageHeader from "./ProfilePageHeader";
import PostCard from "./PostCard/PostCard";
import { useParams } from "react-router-dom";
import BackendApi from "../../../helpers/BackendApi";

function ProfilePage() {
  // State for if profile is loaded or not:
  const [pageLoaded, setPageLoaded] = useState(false);

  // State for detials of the user profile being viewed
  const { username } = useParams();
  const INITIAL_PROFILE_STATE = {
    username: "",
    posts: [],
    bio: "",
    status: "default",
  };
  const [userData, setUserData] = useState(INITIAL_PROFILE_STATE);

  useEffect(() => {
    async function setProfilePage(user) {
      const res = await BackendApi.getUserByUsername(user);
      if (res.status === 404) {
        setUserData({ status: "not found" });
      } else {
        setUserData(res.user);
      }
      setPageLoaded(true);
    }
    setProfilePage(username);
  }, [username]);

  return (
    <>
      {/* Is Profile loaded? If yes, show profile. No? Show as empty */}
      {pageLoaded ? (
        <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 1500 } : {})}>
          <div>
            {/* Was a user found? Show profile of user. No? Show 404 */}
            {userData.status !== "not found" ? (
              <>
                {/* Render a profile with the userData object */}
                <ProfilePageHeader userData={userData} />

                <Grid container direction="row" justify="center">
                  {/* User hasn't posted? Show appropriate message. Else, create
                  post cards for all user posts */}
                  {userData["posts"] ? (
                    <div>User has not posted anything</div>
                  ) : (
                    userData["posts"].map((post) => <PostCard info={post} />)
                  )}
                </Grid>
              </>
            ) : (
              <div> NO ONE FOUND </div>
            )}
          </div>
        </Fade>
      ) : null}
    </>
  );
}

export default ProfilePage;
