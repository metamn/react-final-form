import React from "react";
import { render } from "@testing-library/react";
import FinalForm from "./FinalForm";

it("has a FinalForm component", () => {
  const { getByText } = render(<FinalForm />);
  expect(getByText("FinalForm")).toBeInTheDocument();
});
