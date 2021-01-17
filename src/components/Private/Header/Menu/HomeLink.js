import React from "react";
import { NavLink } from "react-router-dom";
import { IconButton } from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import styled, { css } from "styled-components";
import myColors from "utils/static/colors";

function HomeLink() {
  return (
    <NavLink to="/home">
      <IconButton aria-label="home">
        <StyledHomeIcon />
      </IconButton>
    </NavLink>
  );
}

export default HomeLink;

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
