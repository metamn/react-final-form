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
const Fields = props => {
  return (
    <div className="Fields">
      <Form
        onSubmit={() => {
          console.log("Submit");
        }}
        render={() => (
          <Field
            name="text"
            component="input"
            type="text"
            placeholder="Text input"
          />
        )}
      ></Form>
    </div>
  );
};

Fields.propTypes = propTypes;
Fields.defaultProps = defaultProps;

export default Fields;
export { propTypes as FieldsPropTypes, defaultProps as FieldsDefaultProps };
