import React from "react";
import Fields from "./Fields";
import ApiDoc from "./Fields.md";

export default {
  component: Fields,
  title: "Fields",
  parameters: { notes: ApiDoc }
};

export const Default = () => <Fields />;
