import React from "react";
import { render } from "@testing-library/react";
import Fields from "./Fields";

it("has a Fields component", () => {
  const { getByText } = render(<Fields />);
  expect(getByText("Fields")).toBeInTheDocument();
});
