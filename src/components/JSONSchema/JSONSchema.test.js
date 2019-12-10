import React from "react";
import { render } from "@testing-library/react";
import JSONSchema from "./JSONSchema";

it("has a JSONSchema component", () => {
  const { getByText } = render(<JSONSchema />);
  expect(getByText("JSONSchema")).toBeInTheDocument();
});
