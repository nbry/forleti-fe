import { Grid, Typography } from "@material-ui/core";
import React, { useContext, useEffect } from "react";
import WorkingPaper from "utils/WorkingPaper";
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

        <Grid container direction="column">
          <Title variant="h2">Welcome to Forleti</Title>
        </Grid>

    </BackgroundWrapper>

    // <Fade in={pageLoaded} {...(pageLoaded ? { timeout: 500 } : {})}>
    //   <WorkingPaper elevation={10}>
    //     <Grid container direction="column">
    //       <Title variant="h2">Welcome to Forleti</Title>
    //     </Grid>
    //   </WorkingPaper>
    // </Fade>
  );
}

export default HomePage;

//STYLES:
const Title = styled(Typography)`
  font-family: "Raleway";
`;
