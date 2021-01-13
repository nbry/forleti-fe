import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import { BrowserRouter } from "react-router-dom";

it("App w/Browser Router renders without crashing", function () {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
});
