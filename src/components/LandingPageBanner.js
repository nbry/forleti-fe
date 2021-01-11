import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Collapse, IconButton } from "@material-ui/core";

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
        <IconButton>
          <StyledExpandMoreIcon />
        </IconButton>
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
  font-size: 4.5rem;
`;
