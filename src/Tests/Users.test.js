import React from "react";
import Users from "../Components/Users";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Users />).toJSON();
  expect(tree).toMatchSnapshot();
});
