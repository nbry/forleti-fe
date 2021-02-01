import { Typography } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import WorkingPaper from "utils/WorkingPaper";

function LandingPageInfo() {
  return (
    <OuterWrapper id="loading-page-info">
      <WorkingPaper elevation={10}>
        <Title variant="h2">Patch Notes</Title>
      </WorkingPaper>
    </OuterWrapper>
  );
}

export default LandingPageInfo;

//Styles
const OuterWrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  
`;

const Title = styled(Typography)`
  font-family: "Raleway";
`;
