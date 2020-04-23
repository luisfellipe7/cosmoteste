import React from "react";
import User from "../Components/User";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<User />).toJSON();
  expect(tree).toMatchSnapshot();
});
