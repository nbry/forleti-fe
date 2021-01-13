import {
  Box,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
  Typography,
} from "@material-ui/core";
import LockIcon from "@material-ui/icons/Lock";

import {
  StyledLoginAvatar as StyledAvatar,
  StyledButton,
  StyledFormBox,
  StyledFormPaper,
  StyledTitle,
} from "./shared/authStyles";

function LoginForm({ changeContent }) {
  return (
    <Grid>
      <StyledFormPaper elevation={20}>
        <Grid align="center">
          <StyledAvatar>
            <LockIcon />
          </StyledAvatar>
          <StyledTitle>Log In</StyledTitle>
        </Grid>
        <form>
          <StyledFormBox my={2}>
            <TextField
              label="username"
              placeholder="Enter Username"
              fullWidth
              required={true}
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
          <Typography>
            {" "}
            Need to make an account?{" "}
            <Link component="button" onClick={() => changeContent("signup")}>
              Sign Up Here!
            </Link>
          </Typography>
        </Box>
      </StyledFormPaper>
    </Grid>
  );
}

export default LoginForm;
