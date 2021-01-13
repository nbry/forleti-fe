import React, { useContext, useState } from "react";
import { Fade } from "@material-ui/core";
import AuthFormContent from "./AuthFormContent";
import LoginContext from "../LoginContext";

function AuthForm({ checked, authForm, changeContent }) {
  const { setLoggedIn } = useContext(LoginContext);

  // Initial state of the fields in authForm
  const INITIAL_STATE = {
    email: "",
    password: "",
    username: "",
  };
  const [formData, setFormData] = useState(INITIAL_STATE);

  // Function to listen to changes writte on the form and to update formData state
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  return (
    <Fade in={checked} {...(checked ? { timeout: 750 } : {})}>
      <div>
        <AuthFormContent
          authForm={authForm}
          changeContent={changeContent}
          formData={formData}
          handleChange={handleChange}
        />
      </div>
    </Fade>
  );
}

export default AuthForm;
