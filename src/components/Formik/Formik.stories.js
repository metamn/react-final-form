import React from "react";
import Formik from "./Formik";
import ApiDoc from "./Formik.md";

export default {
  component: Formik,
  title: "Formik",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Formik />;
