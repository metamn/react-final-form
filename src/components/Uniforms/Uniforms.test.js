import React from "react";
import { render } from "@testing-library/react";
import Uniforms from "./Uniforms";

it("has a Uniforms component", () => {
  const { getByText } = render(<Uniforms />);
  expect(getByText("Uniforms")).toBeInTheDocument();
});
