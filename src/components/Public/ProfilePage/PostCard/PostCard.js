import { IconButton, Grid, Paper } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import React, { useContext } from "react";
import parse from "html-react-parser";
import styled, { css } from "styled-components";
import formatDate from "utils/functions/formatDate";
import LoginContext from "components/LoginContext";

function PostCard({ post, handleClickOpen, setTargetPostId }) {
  const { loggedIn, loggedInUser } = useContext(LoginContext);
  console.log("post user: ", post.user_id);
  console.log("user_id", loggedInUser.id);

  return (
    <StyledPaper elevation={5}>
      <PostCardTitle component="h2">{post.title}</PostCardTitle>
      <Content className="postContent">{parse(post.content)}</Content>
      <Grid container direction="row" alignItems="flex-end">
        <CreatedDate>
          {formatDate(post.created)} {post.edited ? "(Edited)" : null}
        </CreatedDate>

        {/* ONLY SHOW BUTTON IF USER IS LOGGED IN AND USER IS THE AUTHOR OF THE BLOG POST */}
        {loggedIn && post.user_id === loggedInUser.id && (
          <IconButton
            variant="contained"
            onClick={() => {
              setTargetPostId(post.id);
              handleClickOpen();
            }}>
            <DeleteIcon />
          </IconButton>
        )}
      </Grid>
    </StyledPaper>
  );
}

export default PostCard;

// STYLES:
const sharedFontStyles = css`
  font-family: "Raleway";
  word-wrap: break-word;
`;
const Content = styled.div`
  ${sharedFontStyles}
`;

const PostCardTitle = styled.h2`
  ${sharedFontStyles}
  text-align: center;
  border-bottom: 1px dotted #a5a5a5;
  font-style: italic;
  font-size: 1.8rem;
  margin: 0px;
`;

const CreatedDate = styled.small`
  color: gray;
  flex-grow: 1;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  width: 95%;
  margin-bottom: 20px;
`;
