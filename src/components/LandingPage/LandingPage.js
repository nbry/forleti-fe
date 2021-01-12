import React from "react";
import styled from "styled-components";

import LandingPageBanner from "./LandingPageBanner";
import LandingPageInfo from "./LandingPageInfo";

function LandingPage() {
  return (
    <>
      <BackgroundContainer>
        <Wrapper>
          <LandingPageBanner />
        </Wrapper>
      </BackgroundContainer>
      <LandingPageInfo />
    </>
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
  background-attachment: fixed;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;
