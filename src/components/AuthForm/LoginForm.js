import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function LoginForm() {
  return (
    <Grid>
      <StyledFormPaper elevation={10}>
        <Grid align="center">
          <StyledAvatar>
            <LockIcon />
          </StyledAvatar>
          <StyledTitle>Log In</StyledTitle>
        </Grid>
        <Box my={2}>
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
          <FormControlLabel
            control={<Checkbox name="checkedB" color="primary" />}
            label="Remember Me"
          />
        </Box>
        <StyledSubmitButton
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </StyledSubmitButton>
        <Box my={2}>
          <Typography>
            <Link to="/">Return Home</Link>
          </Typography>
        </Box>
        <Box my={2}>
          <Typography>
            {" "}
            Need to make an account? <Link to="/signup">Sign Up Here!</Link>
          </Typography>
        </Box>
      </StyledFormPaper>
    </Grid>
  );
}

export default LoginForm;

//STYLE:
const StyledAvatar = styled(Avatar)`
  background-color: #08cb85;
`;

const StyledSubmitButton = styled(Button)`
  margin: 8px 0;
`;
const StyledFormPaper = styled(Paper)`
  margin: 100px auto;
  padding: 20px;
  height: 55vh;
  width: 380px;
`;

const StyledTitle = styled.h2`
  font-size: 2rem;
  margin-top: 0px;
  margin-bottom: 0px;
`;
