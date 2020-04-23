import React from "react";
import Repo from "../Components/Repo";
import renderer from "react-test-renderer";

it("renders correctly", () => {
  const tree = renderer.create(<Repo />).toJSON();
  expect(tree).toMatchSnapshot();
});
