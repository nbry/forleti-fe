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
  StyledAvatar,
  StyledSubmitButton,
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
