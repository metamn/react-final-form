import React from "react";
import { render } from "@testing-library/react";
import JSONSchemaMUI from "./JSONSchemaMUI";

it("has a JSONSchemaMUI component", () => {
  const { getByText } = render(<JSONSchemaMUI />);
  expect(getByText("JSONSchemaMUI")).toBeInTheDocument();
});
