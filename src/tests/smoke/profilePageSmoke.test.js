import React from "react";
import { render } from "@testing-library/react";
import ProfilePage from "../../components/Profile/ProfilePage";

it("ProfilePage renders without crashing", function () {
  render(<ProfilePage />);
});
