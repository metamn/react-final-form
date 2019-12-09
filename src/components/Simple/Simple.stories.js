import React from "react";
import Simple from "./Simple";
import ApiDoc from "./Simple.md";

export default {
  component: Simple,
  title: "Simple",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Simple />;
