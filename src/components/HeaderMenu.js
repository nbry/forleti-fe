import React from "react";
import { Button, Menu, MenuItem } from "@material-ui/core";
import SortIcon from "@material-ui/icons/Sort";
import styled from "styled-components";

function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <StyledSortIcon />
      </Button>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

export default HeaderMenu;

// STYLES:
const StyledSortIcon = styled(SortIcon)`
  color: #fff;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 2rem;
  :hover {
    transition: 400ms;
    color: rgb(67, 238, 164);
  }
`;
