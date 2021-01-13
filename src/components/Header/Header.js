import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

import HeaderMenuList from "./HeaderMenuList";

function Header() {
  return (
    <StyledAppBar id="header" elevation={1}>
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
  font-size: 1.15rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "Raleway";
`;

const StyledAppBar = styled(AppBar)`
  background: rgb(0, 0, 0, 0.6);
`;

const StyledToolbar = styled(Toolbar)`
  width: 80%;
  margin: 0 auto;
`;
