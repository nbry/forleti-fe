import {
  Box,
  Grid,
  TextField,
  Link,
  Typography,
} from "@material-ui/core";
import CreateIcon from "@material-ui/icons/Create";
import React from "react";
import {
  StyledSignupAvatar as StyledAvatar,
  StyledButton,
  StyledFormBox,
  StyledFormPaper,
  StyledTitle,
} from "./sharedAuthStyles";

function SignUpForm({ changeContent }) {
  return (
    <Grid>
      <StyledFormPaper elevation={20}>
        <Grid align="center">
          <StyledAvatar>
            <CreateIcon />
          </StyledAvatar>
          <StyledTitle>Sign Up</StyledTitle>
        </Grid>
        <StyledFormBox my={2}>
          <TextField
            label="email"
            placeholder="Enter Email"
            fullWidth
            required
          />
          <TextField
            label="username"
            placeholder="Enter Username"
            fullWidth
            required
          />
          <TextField
            label="password"
            placeholder="Enter Password"
            type="password"
            fullWidth
            required
          />
        </StyledFormBox>
        <StyledButton
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </StyledButton>
        <StyledButton
          onClick={() => changeContent("default")}
          variant="contained"
          size="large"
          fullWidth
        >
          Return Home
        </StyledButton>
        <Box mt={1} textAlign="center">
          <Typography>
            {" "}
            Already have an account?{" "}
            <Link component="button" onClick={() => changeContent("login")}>
              Log In Here!
            </Link>
          </Typography>
        </Box>
      </StyledFormPaper>
    </Grid>
  );
}

export default SignUpForm;
