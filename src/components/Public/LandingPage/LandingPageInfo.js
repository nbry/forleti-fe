import React from "react";
import styled from "styled-components";

function LandingPageInfo() {
  return (
    <OuterWrapper id="loading-page-info">
      <div>TESTING CONTENT</div>
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
