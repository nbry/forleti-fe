import {
  Avatar,
  Button,
  Paper,
  Box,
  // Checkbox,
  // FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import CreateIcon from "@material-ui/icons/Create";
import styled from "styled-components";
import { useContext } from "react";
import LandingPageBannerContext from "../LandingPageBannerContext";

function AuthFormContent({ formData, handleChange, handleSubmit }) {
  // Using a Boolean to dynamically change form fields between
  // Log In and Sign Up. Look for notes below that say "HERE"
  const { bannerContent, changeContent } = useContext(LandingPageBannerContext);
  const isLoginForm = bannerContent === "login";

  return (
    <Grid>
      <StyledFormPaper elevation={20}>
        <Grid align="center" my={2}>
          {/* **********************************
          HERE: Icon */}
          {isLoginForm ? (
            <StyledLoginAvatar>
              <LockIcon />{" "}
            </StyledLoginAvatar>
          ) : (
            <StyledSignupAvatar>
              <CreateIcon />
            </StyledSignupAvatar>
          )}

          <StyledTitle>
            {/* **********************************
            HERE: Title*/}
            {isLoginForm ? "Log In" : "Sign Up"}
          </StyledTitle>
        </Grid>
        <form onSubmit={handleSubmit}>
          <StyledFormBox>
            {/* **********************************
            HERE: Email Field */}
            {isLoginForm ? null : (
              <TextField
                label="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter Email"
                fullWidth
                type="email"
                required
              />
            )}
            <TextField
              label="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter Username"
              fullWidth
              required
            />
            <TextField
              label="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              type="password"
              fullWidth
              required
            />

            {/* **********************************
            HERE: Remember Me. NOT IMPLEMENTED YET*/}
            {/* {isLoginForm ? (
              <FormControlLabel
                control={<Checkbox name="checkedB" color="primary" />}
                label="Remember Me"
              />
            ) : null} */}
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
        </form>
        <StyledButton
          onClick={() => changeContent("default")}
          variant="contained"
          size="large"
          fullWidth
        >
          Return Home
        </StyledButton>
        <Box mt={1} textAlign="center">
          {/* **********************************
          HERE: Message at the bottom of form */}
          {isLoginForm ? (
            <Typography>
              {" "}
              Need to make an account?{" "}
              <Link component="button" onClick={() => changeContent("signup")}>
                Sign Up Here!
              </Link>
            </Typography>
          ) : (
            <Typography>
              {" "}
              Already have an account?{" "}
              <Link component="button" onClick={() => changeContent("login")}>
                Log In Here!
              </Link>
            </Typography>
          )}
        </Box>
      </StyledFormPaper>
    </Grid>
  );
}

export default AuthFormContent;

// STYLES:

const StyledLoginAvatar = styled(Avatar)`
  background-color: #08cb85;
`;

const StyledSignupAvatar = styled(Avatar)`
  background-color: #9746e6;
`;

const StyledButton = styled(Button)`
  margin-bottom: 10px;
`;

const StyledFormBox = styled(Box)`
  height: 175px;
`;

const StyledFormPaper = styled(Paper)`
  margin: 100px auto;
  padding: 30px;
  height: 500px;
  width: 380px;
`;

const StyledTitle = styled.h2`
  font-size: 2.3rem;
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: "Raleway";
`;
