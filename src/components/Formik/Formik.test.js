import React from "react";
import { render } from "@testing-library/react";
import Formik from "./Formik";

it("has a Formik component", () => {
  const { getByText } = render(<Formik />);
  expect(getByText("Formik")).toBeInTheDocument();
});
