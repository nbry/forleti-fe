import React, { useContext, useState } from "react";
import { Fade } from "@material-ui/core";
import AuthFormContent from "./AuthFormContent";
import LoginContext from "components/LoginContext";
import BackendApi from "utils/BackendApi";
import LandingPageBannerContext from "../LandingPageBannerContext";

function AuthForm() {
  const { bannerContent, checked } = useContext(LandingPageBannerContext);

  // Keep this a ternary operator. It'll take time for the state to be updated, and
  // removing the conditional will have the tab say "Forleti Default" for a split second,
  // which we don't want.
  console.log("auth: ", bannerContent);
  document.title =
    bannerContent === "default"
      ? "Forleti"
      : `Forleti ${
          bannerContent.charAt(0).toUpperCase() + bannerContent.slice(1)
        }`;

  const { setLoggedIn } = useContext(LoginContext);

  // Initial state of the fields in authForm
  const INITIAL_STATE = {
    email: "",
    password: "",
    username: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Listen to changes written on the form and update formData state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (evt) => {
    evt.preventDefault();
    async function submitAuthForm({ username, password, email }) {
      try {
        const res =
          bannerContent === "login"
            ? await BackendApi.login({ username, password })
            : await BackendApi.signup({ username, password, email });
        localStorage.setItem("_token", res.token);
        setLoggedIn(true);
      } catch (e) {
        alert(e);
      }
    }
    submitAuthForm({ ...formData });
  };

  return (
    <Fade in={checked} {...(checked ? { timeout: 750 } : {})}>
      <div>
        <AuthFormContent
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      </div>
    </Fade>
  );
}

export default AuthForm;
