import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, IconButton, Button, Grid, Link } from "@material-ui/core";
import { Link as Scroll } from "react-scroll";

function LandingPageBanner() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  }, []);

  return (
    <Collapse
      in={checked}
      {...(checked ? { timeout: 1000 } : {})}
      collapsedHeight={50}
    >
      <InnerWrapper>
        <Grid>
          <Title>Forleti</Title>
          <Subtitle>
            <i>[ four-leh-tee ]</i>
          </Subtitle>
          <Description>(noun, informal). blogging made simple</Description>
          <StyledButton
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Sign Up
          </StyledButton>
          <StyledButton variant="contained" size="large" fullWidth>
            Log In
          </StyledButton>
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

export default LandingPageBanner;

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
