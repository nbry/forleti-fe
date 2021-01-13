import React from "react";
import { render } from "@testing-library/react";
import AuthForm from "../../components/LandingPage/AuthForm/AuthForm";
import AuthFormContent from "../../components/LandingPage/AuthForm/AuthFormContent";

it("AuthForm renders without crashing", function () {
  render(<AuthForm />);
});

it("AuthFormContent renders without crashing", function () {
  render(<AuthFormContent />);
});
