import React from "react";
import { render } from "@testing-library/react";
import ValidateForm from "./ValidateForm";

it("has a ValidateForm component", () => {
  const { getByText } = render(<ValidateForm />);
  expect(getByText("ValidateForm")).toBeInTheDocument();
});
