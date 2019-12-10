import React from "react";
import JSONSchema from "./JSONSchema";
import ApiDoc from "./JSONSchema.md";

export default {
  component: JSONSchema,
  title: "JSONSchema",
  parameters: { notes: ApiDoc }
};

export const Default = () => <JSONSchema />;
