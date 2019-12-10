import React from "react";
import PropTypes from "prop-types";

import { Formik, Form, Field, ErrorMessage } from "formik";

/**
 * Defines the prop types
 */
const propTypes = {};

/**
 * Defines the default props
 */
const defaultProps = {};

/**
 * Displays the component
 */
const FormikT = props => {
  return (
    <div className="Formik">
      <Formik
        onSubmit={() => {
          console.log("Submit");
        }}
      >
        {({}) => (
          <Form>
            <p>
              <Field type="text" name="text" />
            </p>
            <p>
              <button type="submit">Submit</button>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

FormikT.propTypes = propTypes;
FormikT.defaultProps = defaultProps;

export default FormikT;
export { propTypes as FormikPropTypes, defaultProps as FormikDefaultProps };
