import React from "react";
import { Fade } from "@material-ui/core";
import AuthFormContent from "./AuthFormContent";

function AuthForm({ checked, authForm, changeContent }) {
  return (
    <Fade in={checked} {...(checked ? { timeout: 750 } : {})}>
      <div>
        <AuthFormContent authForm={authForm} changeContent={changeContent} />
      </div>
    </Fade>
  );
}

export default AuthForm;
