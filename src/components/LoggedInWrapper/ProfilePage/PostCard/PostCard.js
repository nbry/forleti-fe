import { Paper } from "@material-ui/core";
import React from "react";
import parse from "html-react-parser";
import styled from "styled-components";
import formatDate from "../../../../helpers/functions/formatDate";

function PostCard({ post }) {
  return (
    <StyledPaper elevation={5}>
      <PostCardTitle>{post.title}</PostCardTitle>
      <div className="postContent">{parse(post.content)}</div>
      <CreatedDate>{formatDate(post.created)}</CreatedDate>
    </StyledPaper>
  );
}

export default PostCard;

// STYLES:

const PostCardTitle = styled.h3`
  font-family: "Raleway";
  font-size: 1.6em;
  margin: 0px;
`;

const CreatedDate = styled.small`
  color: gray;
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  width: 95%;
  margin-bottom: 20px;
`;
