import React from "react";
import { render } from "@testing-library/react";
import Simple from "./Simple";

it("has a Simple component", () => {
  const { getByText } = render(<Simple />);
  expect(getByText("Simple")).toBeInTheDocument();
});
