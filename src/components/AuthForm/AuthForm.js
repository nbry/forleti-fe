import React from "react";
import LoginForm from "./AuthFormLogin";
import SignupForm from "./AuthFormSignup";

function AuthForm({ authForm, setBannerContent }) {
  return (
    <>
      {authForm === "login" ? (
        <LoginForm setBannerContent={setBannerContent} />
      ) : (
        <SignupForm setBannerContent={setBannerContent} />
      )}
    </>
  );
}

export default AuthForm;
