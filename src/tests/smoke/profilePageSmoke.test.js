import React from "react";
import { render } from "@testing-library/react";
import ProfilePage from "../../components/ProfilePage/ProfilePage";

it("ProfilePage renders without crashing", function () {
  render(<ProfilePage />);
});
