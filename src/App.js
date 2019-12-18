import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import FinalForm from "./components/FinalForm";
import FormikT from "./components/Formik";
import JSONSchema from "./components/JSONSchema";
import JSONSchemaMUI from "./components/JSONSchemaMUI";
import Uniforms from "./components/Uniforms";

const App = () => {
  return (
    <Router>
      <JSONSchema />
    </Router>
  );
};

export default App;
