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
    location: {
      type: "object",
      title: "Location",
      properties: {
        northAmerica: {
          type: "array",
          title: "North America",
          items: {
            type: "string",
            enum: ["Canada", "Mexico", "US"]
          },
          uniqueItems: true
        },
        europe: {
          type: "array",
          title: "Europe",
          items: {
            type: "string",
            enum: ["France", "Italy", "UK"]
          },
          uniqueItems: true
        }
      }
    },
    sector: {
      type: "array",
      title: "Sector",
      items: {
        type: "number",
        enum: ["1", "2", "3"],
        enumNames: ["Agriculture", "Economy", "IT"]
      },
      uniqueItems: true
    },
    attributes: {
      type: "array",
      title: "Attributes",
      items: {
        type: "number",
        enum: ["1", "2", "3"],
        enumNames: ["Green", "Higher Education", "Islamic Finance"]
      },
      uniqueItems: true
    },
    tags: {
      type: "array",
      title: "Tags",
      items: {
        type: "number",
        enum: ["1", "2", "3", "4"],
        enumNames: ["Animals", "Elderly", "Unique", "Fabrics"]
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
