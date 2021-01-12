import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, IconButton } from "@material-ui/core";
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
`;

const Title = styled.h2`
  color: white;
  text-shadow: 2px 3px 5px rgba(0, 0, 0, 0.5);
  font-size: 4rem;
`;
