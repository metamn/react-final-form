import React from "react";
import ValidateForm from "./ValidateForm";
import ApiDoc from "./ValidateForm.md";

export default {
  component: ValidateForm,
  title: "ValidateForm",
  parameters: { notes: ApiDoc }
};

export const Default = () => <ValidateForm />;
