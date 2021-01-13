import React from "react";
import { render } from "@testing-library/react";
import Header from "../../components/Header/Header";
import HeaderMenuList from "../../components/Header/HeaderMenuList";

it("Header renders without crashing", function () {
  render(<Header />);
});

it("HeaderMenuList renders without crashing", function () {
  render(<HeaderMenuList />);
});
