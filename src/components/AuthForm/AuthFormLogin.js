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
} from "./sharedAuthStyles";

function LoginForm({ setBannerContent }) {
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
          onClick={() => setBannerContent("default")}
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
            <Link component="button" onClick={() => setBannerContent("signup")}>
              Sign Up Here!
            </Link>
          </Typography>
        </Box>
      </StyledFormPaper>
    </Grid>
  );
}

export default LoginForm;
