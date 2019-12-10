import React from "react";
import PropTypes from "prop-types";

import { Form, Field } from "react-final-form";

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
const FinalForm = props => {
  return (
    <div className="FinalForm">
      <Form
        onSubmit={() => {
          console.log("Submit");
        }}
        render={() => (
          <>
            <p>
              <Field
                name="text"
                component="input"
                type="text"
                placeholder="Text input"
              />
            </p>
            <p>
              <Field
                name="button"
                component="input"
                type="button"
                value="Button input"
              />
            </p>
          </>
        )}
      ></Form>
    </div>
  );
};

FinalForm.propTypes = propTypes;
FinalForm.defaultProps = defaultProps;

export default FinalForm;
export {
  propTypes as FinalFormPropTypes,
  defaultProps as FinalFormDefaultProps
};
