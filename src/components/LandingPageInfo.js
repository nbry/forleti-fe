import React from "react";
import styled from "styled-components";

import ImageCard from "./ImageCard";

function LandingPageInfo() {
  return (
    <OuterWrapper>
      <ImageCard />
    </OuterWrapper>
  );
}

export default LandingPageInfo;

//Styles
const OuterWrapper = styled.div`
  height: 100vh;
`;
