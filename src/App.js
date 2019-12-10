import React from "react";

import FinalForm from "./components/FinalForm";
import FormikT from "./components/Formik";
import JSONSchema from "./components/JSONSchema";
import JSONSchemaMUI from "./components/JSONSchemaMUI";

const App = () => {
  return (
    <>
      <JSONSchemaMUI />
      <p>
        <hr />
      </p>
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
