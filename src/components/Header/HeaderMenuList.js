import React from "react";
import { IconButton } from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import HomeIcon from "@material-ui/icons/Home";
import styled, { css } from "styled-components";
import AccountMenu from "./AccountMenu/AccountMenu";
import NewBlogPost from "./NewBlogPost/NewBlogPost";
import myColors from "../../static/colors";

function HeaderMenuList() {
  return (
    <StyledRoot>
      <div>
        <IconButton aria-label="home">
          <StyledHomeIcon />
        </IconButton>
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

const SyledAddBoxIcon = styled(AddBoxIcon)`
  font-size: 2.5rem;
  color: ${myColors.lightRed};
  :hover {
    transition: 50ms;
    color: #f2a4be;
  }
`;
const StyledRoot = styled.div`
  display: flex;
`;
