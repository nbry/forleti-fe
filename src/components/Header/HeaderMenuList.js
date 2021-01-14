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
import AddBoxIcon from "@material-ui/icons/AddBox";
import PersonIcon from "@material-ui/icons/Person";
import HomeIcon from "@material-ui/icons/Home";
import styled, { css } from "styled-components";
import LoginContext from "../LoginContext";
import myColors from "../../static/colors";

function HeaderMenuList() {
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

  // Log Out Functionality
  const { logOut } = useContext(LoginContext);
  function handleLogOut(event) {
    handleClose(event);
    logOut();
  }

  return (
    <StyledRoot>
      <div>
        <IconButton aria-label="home">
          <StyledHomeIcon />
        </IconButton>
        <IconButton
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          aria-label="menu"
          onClick={handleToggle}
        >
          <SyledPersonIcon />
        </IconButton>
        <IconButton color="secondary">
          <SyledAddBoxIcon />
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogOut}>Logout</MenuItem>
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </StyledRoot>
  );
}

export default HeaderMenuList;

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
const SyledPersonIcon = styled(PersonIcon)`
  ${sharedIconStyles}
`;

const SyledAddBoxIcon = styled(AddBoxIcon)`
  font-size: 2.5rem;
  color: ${myColors.lightRed};
  :hover {
    transition: 50ms;
    color: #f2a4be;
  }
`;
const StyledRoot = styled.div`
  display: flex;
`;
