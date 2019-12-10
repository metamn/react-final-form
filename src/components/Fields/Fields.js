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

Fields.propTypes = propTypes;
Fields.defaultProps = defaultProps;

export default Fields;
export { propTypes as FieldsPropTypes, defaultProps as FieldsDefaultProps };
