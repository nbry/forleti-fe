import { AppBar, Toolbar } from "@material-ui/core";
import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HeaderMenu from "./HeaderMenu";
import LoginContext from "components/LoginContext";
import myColors from "utils/static/colors";
import parseTheme from "utils/functions/parseTheme";

function Header({ theme }) {
  const { loggedIn, loggedInUser } = useContext(LoginContext);

  // SHOW DYNAMIC STYLING FOR HEADER COLOR, BASED ON USER'S THEME
  // Seems a bit overkill, but it'll catch all while the app renders
  theme = loggedIn
    ? parseTheme(loggedInUser ? loggedInUser.theme : null)
    : theme;

  return (
    <StyledAppBar
      id="header"
      position="sticky"
      elevation={0}
      style={{ background: theme.background }}>
      <StyledToolbar>
        <Title>
          <StyledNavLink to="/home">Forleti</StyledNavLink>
        </Title>

        {/* ONLY SHOW HEADER MENU IF LOGGED IN */}
        {loggedIn && <HeaderMenu />}
      </StyledToolbar>
    </StyledAppBar>
  );
}

export default Header;

// STYLES:
const StyledAppBar = styled(AppBar)`
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
