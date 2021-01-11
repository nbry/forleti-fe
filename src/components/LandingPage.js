import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Header from "./Header";
import { Collapse, IconButton } from "@material-ui/core";

function LandingPage() {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(true);
  });

  return (
    <BackgroundContainer>
      <Wrapper>
        <Header />
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
      </Wrapper>
    </BackgroundContainer>
  );
}

export default LandingPage;

//STYLES:
const backgroundURL = `${process.env.PUBLIC_URL + "/assets/typewriter-bg.jpg"}`;

const BackgroundContainer = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;
`;

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

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
