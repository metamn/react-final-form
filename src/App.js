import React from "react";

import FinalForm from "./components/FinalForm";
import FormikT from "./components/Formik";
import JSONSchema from "./components/JSONSchema";

const App = () => {
  return (
    <>
      <JSONSchema />
      <p>
        <hr />
      </p>
      <FormikT />
      <p>
        <hr />
      </p>
      <FinalForm />
    </>
  );
};

export default App;
