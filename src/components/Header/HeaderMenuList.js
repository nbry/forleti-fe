import React from "react";
import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import styled, { css } from "styled-components";
import AccountMenu from "./Menu/AccountMenu";
import HomeLink from "./Menu/HomeLink";
import NewBlogPost from "./NewBlogPost/NewBlogPost";
import myColors from "../../static/colors";

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

const sharedIconStyles = css`
  font-size: 1.5rem;
  color: white;
  :hover {
    transition: 50ms;
    color: ${myColors.seaGreen};
  }
`;

const StyledHomeIcon = styled(HomeIcon)`
  ${sharedIconStyles}
`;

const StyledRoot = styled.div`
  display: flex;
`;
