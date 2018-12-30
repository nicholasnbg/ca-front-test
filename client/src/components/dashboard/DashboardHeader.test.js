import React from "react";
import renderer from "react-test-renderer";

import DashboardHeader from "./DashboardHeader";

it("renders correctly", () => {
  const tree = renderer.create(<DashboardHeader />).toJSON();
  expect(tree).toMatchSnapshot();
});
