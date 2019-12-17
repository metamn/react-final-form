import React from "react";
import PropTypes from "prop-types";

import { JSONSchemaBridge } from "uniforms-bridge-json-schema";
import { AutoForm } from "uniforms-semantic";
import Ajv from "ajv";

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
    check: {
      type: "array",
      items: {
        type: "string",
        enum: ["choice 1", "choice 2"],
        uniforms: {
          checkboxes: "true"
        }
      },
      uniqueItems: true
    },
    riskRating: {
      type: "integer",
      title: "Risk rating",
      minimum: 0,
      maximum: 5
    },
    profitability: {
      type: "integer",
      title: "Profitability",
      minimum: -55,
      maximum: 66
    }
  }
};

const schema2 = {
  title: "Guest",
  type: "object",
  properties: {
    firstName: { type: "string" },
    lastName: { type: "string" },
    workExperience: {
      description: "Work experience in years",
      type: "integer",
      minimum: 0,
      maximum: 100
    }
  },
  required: ["firstName", "lastName"]
};

/**
 * @see https://uniforms.tools/docs/tutorials-basic-uniforms-usage
 */
const ajv = new Ajv({ allErrors: true, useDefaults: true });

function createValidator(schema) {
  const validator = ajv.compile(schema);

  return model => {
    validator(model);

    if (validator.errors && validator.errors.length) {
      throw { details: validator.errors };
    }
  };
}

/**
 * Displays the component
 */
const Uniforms = props => {
  const schemaValidator = createValidator(schema);
  const validatedSchema = new JSONSchemaBridge(schema, schemaValidator);

  return (
    <div className="Uniforms">
      <AutoForm schema={validatedSchema} onSubmit={console.log} />
    </div>
  );
};

export default Uniforms;
