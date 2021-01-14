import React, { useContext } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";

import HeaderMenuList from "./HeaderMenuList";
import LoginContext from "../LoginContext";

function Header() {
  const { loggedIn } = useContext(LoginContext);
  return (
    <>
      {loggedIn ? (
        <StyledAppBar id="header" position="sticky" elevation={0}>
          <StyledToolbar>
            <Title>Forleti</Title>
            <HeaderMenuList />
          </StyledToolbar>
        </StyledAppBar>
      ) : null}
    </>
  );
}

export default Header;

// STYLES:
const Title = styled.h1`
  flex-grow: 1;
  color: white;
  font-family: "Raleway";
`;

const StyledAppBar = styled(AppBar)`
  background: #0c0822;
  border-bottom: 1px solid #3cf38d;
`;

const StyledToolbar = styled(Toolbar)`
  width: 80%;
  margin: 0 auto;
`;
