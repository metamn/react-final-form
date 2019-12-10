import React from "react";
import PropTypes from "prop-types";

import MuiForm from "rjsf-material-ui";

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
const JSONSchemaMUI = props => {
  return (
    <div className="JSONSchemaMUI">
      <MuiForm
        schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
};

JSONSchemaMUI.propTypes = propTypes;
JSONSchemaMUI.defaultProps = defaultProps;

export default JSONSchemaMUI;
export {
  propTypes as JSONSchemaMUIPropTypes,
  defaultProps as JSONSchemaMUIDefaultProps
};
