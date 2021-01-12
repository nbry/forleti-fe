import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

import HeaderMenuList from "./HeaderMenuList";

function Header() {
  return (
    <StyledAppBar id="header" elevation={0}>
      <StyledToolbar>
        <Title>Forleti</Title>
        <HeaderMenuList />
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;

// STYLES:
const Title = styled.h1`
  flex-grow: 1;
  font-size: 1rem;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
`;

const StyledAppBar = styled(AppBar)`
  background: none;
`;

const StyledToolbar = styled(Toolbar)`
  width: 80%;
  margin: 0 auto;
`;
