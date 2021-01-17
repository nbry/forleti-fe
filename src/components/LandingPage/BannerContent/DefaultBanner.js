import React, { useContext } from "react";
import styled, { css } from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { IconButton, Button, Collapse, Grid } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";
import LoginContext from "../../LoginContext";
import LandingPageBannerContext from "../LandingPageBannerContext";

function DefaultBanner() {
  document.title = "Forleti";

  // Display landing page. Shows different content depending on if user
  // is logged in or not. Look for "HERE" notes to see differences
  const { checked, changeContent } = useContext(LandingPageBannerContext);
  const { loggedIn } = useContext(LoginContext);

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 600 } : {})}
      collapsedHeight={50}>
      <InnerWrapper>
        <Grid>
          <Title>Forleti</Title>
          <Subtitle>
            <i>[ four-leh-tee ]</i>
          </Subtitle>
          <Description>(noun, informal). blogging made simple</Description>

          {/* *****************
          HERE: Buttons */}
          {loggedIn ? null : (
            <>
              <StyledButton
                onClick={() => changeContent("signup")}
                variant="contained"
                color="primary"
                size="large"
                fullWidth>
                Sign Up
              </StyledButton>
              <StyledButton
                onClick={() => changeContent("login")}
                variant="contained"
                size="large"
                fullWidth>
                Log In
              </StyledButton>
            </>
          )}
          <Scroll to="loading-page-info" smooth={true}>
            <IconButton>
              <StyledExpandMoreIcon />
            </IconButton>
          </Scroll>
        </Grid>
      </InnerWrapper>
    </Collapse>
  );
}

export default DefaultBanner;

//STYLES:

// General:
const InnerWrapper = styled.div`
  text-align: center;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: #43eea4;
  font-size: 5rem;
  border-radius: 50%;
  animation: pulse-animation 4s infinite;
  @keyframes pulse-animation {
    0% {
      box-shadow: 0 0 0 0px rgba(0, 0, 0, 0.2);
    }
    100% {
      box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
    }
  }
  :hover {
    animation: none;
  }
`;

// Banner Font:
const sharedFontStyle = css`
  color: white;
  text-shadow: 3px 4px 5px rgba(0, 0, 0);
  font-family: "Raleway";
`;

const Description = styled.div`
  ${sharedFontStyle}
  font-size: 1.1rem;
  text-align: start;
  margin-bottom: 10px;
`;

const Subtitle = styled.h3`
  ${sharedFontStyle}
  font-size: 1.2rem;
  text-align: start;
`;

const Title = styled.h2`
  ${sharedFontStyle}
  font-size: 4rem;
  margin-bottom: 20px;
`;
