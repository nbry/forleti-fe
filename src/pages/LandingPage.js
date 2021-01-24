import React from "react";
import styled from "styled-components";
import LandingPageBanner from "components/Landing/LandingPageBanner";
import LandingPageInfo from "components/Landing/LandingPageInfo";

function LandingPage({ setBanner }) {
  return (
    <>
      <BackgroundContainer>
        <Version>0.1.0-alpha</Version>
        <Wrapper>
          <LandingPageBanner setBanner={setBanner} />
        </Wrapper>
      </BackgroundContainer>
      <LandingPageInfo />
    </>
  );
}

export default LandingPage;

//STYLES:
const backgroundUrl = `${process.env.PUBLIC_URL + "/assets/typewriter-bg.jpg"}`;

const BackgroundContainer = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundUrl});
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

const Version = styled.small`
  color: white;
  font-size: 0.8rem;
`;
