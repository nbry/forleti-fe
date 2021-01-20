import React, { useContext, useEffect, useState } from "react";
import ProfilePageHeader from "./ProfilePageHeader";
import ProfilePagePosts from "./ProfilePagePosts";
import BackgroundWrapper from "components/BackgroundWrapper";
import BackendApi from "utils/BackendApi";
import { useParams } from "react-router-dom";
import LoginContext from "components/LoginContext";

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
          console.log(res.user);
        }
      }
    }
    getUserBeingViewed(username);
  }, [username, loggedInUser]);

  return (
    <>
      {userBeingViewed && (
        <BackgroundWrapper user={userBeingViewed}>
          <ProfilePageHeader userData={userBeingViewed} />
          <ProfilePagePosts userPosts={userBeingViewed.posts} />
        </BackgroundWrapper>
      )}
    </>
  );
}

export default ProfilePage;
