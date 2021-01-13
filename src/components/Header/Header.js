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
        <StyledAppBar id="header" elevation={1}>
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
  font-size: 1.15rem;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  color: white;
  font-family: "Raleway";
`;

const StyledAppBar = styled(AppBar)`
  background: #0c0822;
`;

const StyledToolbar = styled(Toolbar)`
  width: 80%;
  margin: 0 auto;
`;
