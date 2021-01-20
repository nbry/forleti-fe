import React, { useState } from "react";
import PostCard from "./PostCard/PostCard";
import { Grid } from "@material-ui/core";
import BackendApi from "utils/BackendApi";
import DeletePostDialog from "./DeletePostDialog";
import { useHistory } from "react-router-dom";

function ProfilePagePosts({ userPosts }) {
  // Use state for delete dialog and pageLoaded context to handle post deletion.
  // This single dialog will be dynamic. Each post card will have a "deletePost"
  // method passed down as a prop. On open, the target blog post's id will be passed in.
  // User can then choose to submit the deltion request. After account deletion,
  // set pageLoaded to true to force a  re-render.

  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [targetPostId, setTargetPostId] = useState(null);
  const history = useHistory();

  function handleClickOpen() {
    setDeleteDialogOpen(true);
  }

  function handleClose() {
    setDeleteDialogOpen(false);
  }

  async function handleDeletion() {
    const res = await BackendApi.deleteBlogPost(targetPostId);
    if (res) {
      handleClose();
      history.go(0);
    }
  }

  return (
    <Grid container direction="row" justify="center">
      {/* User hasn't posted? Show appropriate message. Else, create
                  post cards for all user posts */}
      {userPosts.length ? (
        userPosts.map((post) => (
          <PostCard
            post={post}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            setTargetPostId={setTargetPostId}
            key={post.id}
          />
        ))
      ) : (
        <p aria-label="message">User has not posted anything yet!</p>
      )}
      <DeletePostDialog
        deleteDialogOpen={deleteDialogOpen}
        handleDeletion={handleDeletion}
        handleClose={handleClose}
      />
    </Grid>
  );
}

export default ProfilePagePosts;
