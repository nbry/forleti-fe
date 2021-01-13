import React from "react";
import { render } from "@testing-library/react";
import LandingPage from "../../components/LandingPage/LandingPage";
import LandingPageBanner from "../../components/LandingPage/LandingPageBanner";
import LandingPageInfo from "../../components/LandingPage/LandingPageInfo";
import DefaultBanner from "../../components/LandingPage/BannerContent/DefaultBanner";


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
