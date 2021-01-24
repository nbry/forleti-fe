import { Box, Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import styled from "styled-components";
import BackgroundWrapper from "components/BackgroundWrapper";
import LoginContext from "components/LoginContext";

function HomePage() {
  const { loggedInUser } = useContext(LoginContext);
  useEffect(() => {
    document.title = "Forleti Home";
    window.scrollTo(0, 0);
  }, []);

  return (
    <BackgroundWrapper user={loggedInUser} setContent="home">
      <Grid container direction="column" alignItems="center">
        <Title variant="h2">Welcome to Forleti</Title>
        <Box mt={5}>
          <StyledImage src={process.env.PUBLIC_URL + "/assets/if-i-made-one.png"} />
        </Box>
      </Grid>
    </BackgroundWrapper>
  );
}

export default HomePage;

//STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
`;
