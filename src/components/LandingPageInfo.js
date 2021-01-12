import React from "react";
import styled from "styled-components";

import ImageCard from "./ImageCard";
import cards from "./static/LandingPageCards";

function LandingPageInfo() {
  return (
    <OuterWrapper>
      {cards.map((card) => (
        <ImageCard key={card.title} cardInfo={card} />
      ))}
    </OuterWrapper>
  );
}

export default LandingPageInfo;

//Styles
const OuterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
