import React from "react";
import FinalForm from "./FinalForm";
import ApiDoc from "./FinalForm.md";

export default {
  component: FinalForm,
  title: "FinalForm",
  parameters: { notes: ApiDoc }
};

export const Default = () => <FinalForm />;
