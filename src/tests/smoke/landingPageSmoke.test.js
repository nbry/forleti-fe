import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "../../components/Landing/LandingPage";
import LandingPageBanner from "../../components/Landing/LandingPageBanner";
import LandingPageInfo from "../../components/Landing/LandingPageInfo";
import DefaultBanner from "../../components/BannerContent/DefaultBanner";


let realUseContext;
let useContextMock;
// Setup mock
beforeEach(() => {
  realUseContext = React.useContext;
  useContextMock = React.useContext = jest.fn();
});
// Cleanup mock
afterEach(() => {
  React.useContext = realUseContext;
});

it("LandingPage renders without crashing", function () {
  render(<LandingPage />);
});

it("LandingPageBanner renders without crashing", function () {
  render(<LandingPageBanner />);
});

it("LandingPageInfo renders without crashing", function () {
  render(<LandingPageInfo />);
});

it("DefaultBanner renders without crashing", function () {
  render(<DefaultBanner />);
});
