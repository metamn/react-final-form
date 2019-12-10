import React from "react";
import PropTypes from "prop-types";

import Form from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.min.css";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

const log = type => console.log.bind(console, type);

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
const JSONSchema = props => {
  return (
    <div className="JSONSchema">
      <Form
        schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
};

JSONSchema.propTypes = propTypes;
JSONSchema.defaultProps = defaultProps;

export default JSONSchema;
export {
  propTypes as JSONSchemaPropTypes,
  defaultProps as JSONSchemaDefaultProps
};
