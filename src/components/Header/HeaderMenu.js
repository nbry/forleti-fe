import React from "react";
import styled from "styled-components";
import AccountMenu from "./Menu/AccountMenu";
import HomeLink from "./Menu/HomeLink";
import NewBlogPost from "./NewBlogPost/NewBlogPost";

function HeaderMenuList() {
  return (
    <StyledRoot>
      <div>
        <HomeLink />
        <AccountMenu />
        <NewBlogPost />
      </div>
    </StyledRoot>
  );
}

export default HeaderMenuList;

// STYLES:
const StyledRoot = styled.div`
  display: flex;
`;
