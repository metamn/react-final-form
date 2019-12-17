import React from "react";
import Uniforms from "./Uniforms";
import ApiDoc from "./Uniforms.md";

export default {
  component: Uniforms,
  title: "Uniforms",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Uniforms />;
