import React from "react";

import Form from "react-jsonschema-form";
import "bootstrap/dist/css/bootstrap.min.css";

const log = type => console.log.bind(console, type);

const schema = {
  title: "Wakibi",
  type: "object",
  properties: {
    gender: {
      type: "string",
      title: "Gender",
      enum: ["Women", "Men"]
    },
    grouped: {
      type: "string",
      title: "Group",
      enum: ["Individual", "Group"]
    },
    location: {
      type: "array",
      title: "Location",
      items: {
        type: "string",
        enum: ["Canada", "Mexico", "US"]
      },
      uniqueItems: "true"
    }
  }
};

const uiSchema = {
  gender: {
    "ui:widget": "radio"
  },
  grouped: {
    "ui:widget": "radio"
  },
  location: {
    "ui:widget": "checkboxes"
  }
};

/**
 * Displays the component
 */
const JSONSchema = props => {
  return (
    <div className="JSONSchema" style={{ padding: "1em", margin: "1em" }}>
      <Form
        schema={schema}
        uiSchema={uiSchema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")}
      />
    </div>
  );
};

export default JSONSchema;
