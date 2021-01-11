import React from "react";
import { AppBar, IconButton, Toolbar } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import styled from "styled-components";

function Header() {
  return (
    <StyledAppBar elevation={0}>
      <StyledToolbar>
        <Title>Forleti</Title>
        <IconButton>
          <StyledSortIcon />
        </IconButton>
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;

// STYLES:
const Title = styled.h1`
  flex-grow: 1;
`;

const StyledAppBar = styled(AppBar)`
  background: none !important;
`;

const StyledSortIcon = styled(SortIcon)`
  color: #fff;
  font-size: 2rem;
`;

const StyledToolbar = styled(Toolbar)`
  width: 80%;
  margin: 0 auto;
`;
