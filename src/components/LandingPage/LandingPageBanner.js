import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, IconButton, Button } from "@material-ui/core";
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
        <Title>
          Welcome to <br /> <span>Forleti</span>
        </Title>
        <Scroll to="loading-page-info" smooth={true}>
          <IconButton>
            <StyledExpandMoreIcon />
          </IconButton>
        </Scroll>
      </InnerWrapper>
    </Collapse>
  );
}

export default LandingPageBanner;

//STYLES:
const InnerWrapper = styled.div`
  text-align: center;
`;

const StyledExpandMoreIcon = styled(ExpandMoreIcon)`
  color: rgb(67, 238, 164);
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

const Title = styled.h2`
  color: white;
  text-shadow: 3px 4px 5px rgba(0, 0, 0, 0.6);
  font-size: 4rem;
  font-family: Arial, Helvetica, sans-serif;
`;
