import React from "react";
import { render } from "@testing-library/react";
import AuthForm from "../components/AuthForm/AuthForm";
import LoginForm from "../components/AuthForm/AuthFormLogin";
import SignupForm from "../components/AuthForm/AuthFormSignup";

it("AuthForm renders without crashing", function () {
  render(<AuthForm />);
});

it("LoginForm renders without crashing", function () {
  render(<LoginForm />);
});

it("SignupForm renders without crashing", function () {
  render(<SignupForm />);
});
