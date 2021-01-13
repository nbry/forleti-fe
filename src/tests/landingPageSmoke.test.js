import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "../components/LandingPage/LandingPage";
import LandingPageBanner from "../components/LandingPage/LandingPageBanner";
import LandingPageInfo from "../components/LandingPage/LandingPageInfo";

it("LandingPage renders without crashing", function () {
  render(<LandingPage />);
});

it("LandingPageBanner renders without crashing", function () {
  render(<LandingPageBanner />);
});

it("LandingPageInfo renders without crashing", function () {
  render(<LandingPageInfo />);
});
