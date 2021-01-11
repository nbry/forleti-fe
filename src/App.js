import React from "react";
import { CssBaseline } from "@material-ui/core";
import styled from "styled-components";
import Header from "./components/Header";

function App() {
  return (
    <Wrapper>
      <CssBaseline />
      <Header />
    </Wrapper>
  );
}

export default App;

//STYLES:
const backgroundURL = `${process.env.PUBLIC_URL + "/assets/typewriter-bg.jpg"}`;

const Wrapper = styled.div`
  min-height: 100vh;
  background-image: url(${backgroundURL});
  background-repeat: no-repeat;
  background-size: cover;
`;
