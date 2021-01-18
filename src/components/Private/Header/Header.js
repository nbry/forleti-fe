import { AppBar, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import LoginContext from "components/LoginContext";
import myColors from "utils/static/colors";

function Header() {
  const { loggedIn } = useContext(LoginContext);
  return (
    <>
      {loggedIn && (
        <StyledAppBar id="header" position="sticky" elevation={0}>
          <StyledToolbar>
            <Title>
              <StyledNavLink to="/home">Forleti</StyledNavLink>
            </Title>
            <HeaderMenu />
          </StyledToolbar>
        </StyledAppBar>
      )}
    </>
  );
}

export default Header;

// STYLES:
const StyledAppBar = styled(AppBar)`
  background: ${myColors.background};
  border-bottom: 1px solid ${myColors.border};
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: white;
`;

const StyledToolbar = styled(Toolbar)`
  width: 100%;
  margin: 0 auto;
`;

const Title = styled.h1`
  flex-grow: 1;
  color: white;
  font-size: 1.5em;
  font-family: "Raleway";
`;