import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";
import React from "react";
import { Link } from "react-router-dom";
import {
  StyledLoginAvatar as StyledAvatar,
  StyledButton,
  StyledFormBox,
  StyledFormPaper,
  StyledTitle,
} from "./sharedAuthStyles";

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
        <StyledFormBox my={2}>
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
          component={Link}
          to="/"
          variant="contained"
          size="large"
          fullWidth
        >
          Return Home
        </StyledButton>
        <Box mt={1} textAlign="center">
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
