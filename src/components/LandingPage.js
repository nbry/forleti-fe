import React from "react";
import styled from "styled-components";
import Header from "./Header";

function LandingPage() {
  return (
    <Wrapper>
      <Header />
    </Wrapper>
  );
}

export default LandingPage;

//STYLES:
const backgroundURL = `${process.env.PUBLIC_URL + "/assets/typewriter-bg.jpg"}`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;
`;
