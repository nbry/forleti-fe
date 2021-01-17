import React, { useContext } from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import LoginContext from "../../LoginContext";
import myColors from "../../../static/colors";
import { NavLink } from "react-router-dom";

function Header() {
  const { loggedIn } = useContext(LoginContext);
  return (
    <>
      {loggedIn ? (
        <StyledAppBar id="header" position="sticky" elevation={0}>
          <StyledToolbar>
            <Title>
              <StyledNavLink to="/home">Forleti</StyledNavLink>
            </Title>
            <HeaderMenu />
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
  font-size: 1.5em;
  font-family: "Raleway";
`;

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
