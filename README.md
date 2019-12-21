# react-forms

Playin' with React form libraries.

## Goal

The goal is to find / build / combine something which:

1. Describes the form via JSON

1.1. All input fields has to be supported
1.2. Grouping and sub-grouping has to be supported
1.3. Internationalization has to be supported

2. Auto generates the form fields using a theme (Material UI, Bootstrap, self made, etc.)

2.1. Every aspect of the theme must be customizable: Input group headers, Group headers, fields, ...

3. Does validation and error messaging

3.1 Done automatically from the schema

4. Business logic is extendable

4.1 Query param support
4.2 Connected fields: a field value determines the state of the other field values

## 1. Describes the form via JSON

### JSON Schema

- There is a promising approach (https://json-schema.org/) to describe the form (and more, even a complete UI) via JSON in a framework / language agnostic way
- This would be ideal: define the UI in JSON, implement today in React, tomorrow with another framework. Even more, define the UI and the backend team can create the API serving the UI based on this JSON Schema.
- This idea is taken further, ie. there is a Typescript-to-JSON-Schema converter, or a GraphQL-to-Forms generator. They all respond to the same problem: have a standard data description and then generate static types, UI controls from it, instead of writing the code manually all the time
- It seems the idea is good but no big company / contributor invested in implementation, just single maintainers, small group of contributors whom are clearly overwhelmed by the details and the complexity of the problem.
- The most advanced investment comes from Cloudflare: https://github.com/cloudflare/json-schema-tools and the solution have not yet reached a stable interface.

```
|=========================================================
| Package               | Used by | Contribs | Issues    |
|=======================|=========|==========|===========|
| react-jsonschema-form | 2.5k    | 165      | 269 / 666 |
|-----------------------|---------|----------|-----------|
| uniforms              | 800     | 47       | 12 / 475  |
|=========================================================
```

#### react-jsonschema-form

- https://github.com/rjsf-team/react-jsonschema-form
- Features:
  - https://react-jsonschema-form.readthedocs.io/en/latest/form-customization/

##### Pro

- Declarative form syntax including schema for data, ui, errors / validations
- Supports Bootstrap out of the box, plus Material UI: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/material-ui
- Built by / for Mozilla ? ("It is a major component in the kinto-admin project.")

##### Con

- Seems having more features than necessary (for simple use cases)
- Incomplete docs: https://github.com/rjsf-team/react-jsonschema-form/issues/1543

#### uniforms

- https://uniforms.tools/

##### Pro

- Compared to others: https://uniforms.tools/docs/compare-matrix
- It supports more formats (JSON Schema, GraphQL) and more themes than any other library
- It seems to be well maintained (13 open issues, 469 closed)
- ~Docs are clear~ at the first sight

##### Con

- The API doesn't supports the ... `checkbox` input type ... https://uniforms.tools/docs/api-fields
- Syntax is ambiguous and the generated code is full of errors: https://github.com/vazco/uniforms/issues/671, https://github.com/vazco/uniforms/issues/670, https://github.com/vazco/uniforms/issues/669

### OpenAPI

- It's similar to JSON Schema but more extended supporting REST web services

### Resources

- https://apisyouwonthate.com/blog/the-many-amazing-uses-of-json-schema-client-side-validation
- https://stoplight.io/blog/openapi-json-schema/

## 2. Auto generates the form fields using a theme

### Final Form

- https://final-form.org/react
- https://final-form.org/docs/react-final-form/examples

#### Pro

- It has a huge set of examples for various use cases
- It seems to be highly adaptable / extendable

#### Con

- Incomplete / airy docs
- Renderprops syntax
- No examples with hooks

### Formik

- https://jaredpalmer.com/formik/

#### Pro

- The first tutorial is done with hooks
- It has a huge focus on validation

#### Con

- The simplest text input example gives and error when typing in the text (it had no initial values set ...)
- Cannot use proptypes for validations: https://github.com/jaredpalmer/formik/issues/1424 ... Yup is preferred ...
- A very few examples only
- An one man show

## 4. Business logic is extendable

### Query params support

#### query-string

#### use-query-params
