import { Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfilePagePosts from "./ProfilePagePosts";
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
    async function setProfilePage(name) {
      const res = await BackendApi.getUserByUsername(name);
      if (res.status === 404) {
        setUserData({ status: "not found" });
      } else {
        setUserData({ ...res.user });
      }
    }
    setProfilePage(username);
    setPageLoaded(true);
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
                <ProfilePagePosts userPosts={userData.posts} />
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
