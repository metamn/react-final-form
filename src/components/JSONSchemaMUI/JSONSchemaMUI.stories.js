import React from "react";
import JSONSchemaMUI from "./JSONSchemaMUI";
import ApiDoc from "./JSONSchemaMUI.md";

export default {
  component: JSONSchemaMUI,
  title: "JSONSchemaMUI",
  parameters: { notes: ApiDoc }
};

export const Default = () => <JSONSchemaMUI />;
