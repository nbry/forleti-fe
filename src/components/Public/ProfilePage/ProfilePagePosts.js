import React from "react";
import PostCard from "./PostCard/PostCard";
import { Grid } from "@material-ui/core";

function ProfilePagePosts({ userPosts }) {
  console.log("USERPOSTS: ", userPosts);
  return (
    <Grid container direction="row" justify="center">
      {/* User hasn't posted? Show appropriate message. Else, create
                  post cards for all user posts */}
      {userPosts.length ? (
        userPosts.map((post) => <PostCard post={post} key={post.id} />)
      ) : (
        <p aria-label="message">User has not posted anything yet!</p>
      )}
    </Grid>
  );
}

export default ProfilePagePosts;
