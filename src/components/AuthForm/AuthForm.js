import React from "react";
import { Fade } from "@material-ui/core";
import LoginForm from "./AuthFormLogin";
import SignupForm from "./AuthFormSignup";

function AuthForm({ checked, authForm, changeContent }) {
  return (
    <Fade in={checked} {...(checked ? { timeout: 750 } : {})}>
      {authForm === "login" ? (
        <div>
          <LoginForm changeContent={changeContent} />
        </div>
      ) : (
        <div>
          <SignupForm changeContent={changeContent} />
        </div>
      )}
    </Fade>
  );
}

export default AuthForm;
