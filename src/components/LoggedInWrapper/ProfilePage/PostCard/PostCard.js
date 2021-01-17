import { Paper } from "@material-ui/core";
import React from "react";
import parse from "html-react-parser";
import styled, { css } from "styled-components";
import formatDate from "../../../../helpers/functions/formatDate";

function PostCard({ post }) {
  return (
    <StyledPaper elevation={5}>
      <PostCardTitle component="h2">{post.title}</PostCardTitle>
      <Content className="postContent">{parse(post.content)}</Content>
      <CreatedDate>{formatDate(post.created)}</CreatedDate>
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
`;

const StyledPaper = styled(Paper)`
  padding: 20px;
  width: 95%;
  margin-bottom: 20px;
`;
