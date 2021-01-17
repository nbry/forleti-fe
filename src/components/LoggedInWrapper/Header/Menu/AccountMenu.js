import React, { useContext } from "react";
import {
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
  IconButton,
} from "@material-ui/core";
import PersonIcon from "@material-ui/icons/Person";
import styled, { css } from "styled-components";
import LoginContext from "../../../LoginContext";
import LogOutDialog from "./LogOutDialog";
import myColors from "../../../../static/colors";
import { NavLink } from "react-router-dom";

function AccountMenu() {
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  // Curently logged in User from LoginContext
  const { loggedInUser } = useContext(LoginContext);

  return (
    <>
      <IconButton
        ref={anchorRef}
        aria-controls={open ? "menu-list-grow" : undefined}
        aria-haspopup="true"
        aria-label="menu"
        onClick={handleToggle}
      >
        <SyledPersonIcon />
      </IconButton>

      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin:
                placement === "bottom" ? "center top" : "center bottom",
            }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id="menu-list-grow"
                  onKeyDown={handleListKeyDown}
                >
                  <StyledNavLink
                    to={"/u/" + loggedInUser.username}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                  </StyledNavLink>
                  <StyledNavLink
                    to={"/settings"}
                    style={{ textDecoration: "none", color: "black" }}
                  >
                    <MenuItem onClick={handleClose}>Settings</MenuItem>
                  </StyledNavLink>
                  <LogOutDialog />
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </>
  );
}

export default AccountMenu;

// STYLES:
const sharedIconStyles = css`
  font-size: 1.5rem;
  color: white;
  :hover {
    transition: 50ms;
    color: ${myColors.seaGreen};
  }
`;

const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const SyledPersonIcon = styled(PersonIcon)`
  ${sharedIconStyles}
`;
