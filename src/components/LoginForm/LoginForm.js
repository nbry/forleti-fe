import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link as MuiLink,
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
          <h2>Log In</h2>
        </Grid>
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
        <StyledSubmitButton
          type="submit"
          color="primary"
          variant="contained"
          size="large"
          fullWidth
        >
          Submit
        </StyledSubmitButton>
        <Typography>
          {" "}
          Need to make an account? <Link to="/signup">Sign Up Here!</Link>
        </Typography>
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
  height: 70vh;
  width: 380px;
`;
