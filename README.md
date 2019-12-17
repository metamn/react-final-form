# react-forms

Playin' with React form libraries.

## Goal

The goal is to find / build / combine something which:

1. Describes the form via JSON

- All input fields has to be supported
- Grouping and sub-grouping has to be supported
- Internationalization has to be supported

2. Auto generates the form fields using a theme (Material UI, Bootstrap, self made, etc.)

- Every aspect of the theme must be customizable: Input group headers, Group headers, ...

3. Does validation and error messaging

- Done automatically from the schema

4. Business logic is extendable

- The whole business logic mut be customizable, like:
  - Adding query param support
  - Connected fields: a field value determines the state of the other field values

## Summary

- There is a promising approach (https://json-schema.org/) to describe the form (and more, even a complete UI) via JSON in a framework / language agnostic way
- This would be ideal: define the UI in JSON, implement today in React, tomorrow with another framework. Even more, define the UI and the backend team can create the API serving the UI based on this JSON Schema.
- This idea is taken further, ie. there is a Typescript-to-JSON-Schema converter, or a GraphQL-to-Forms generator. They all respond to the same problem: have a standard data description and then generate static types, UI controls from it, instead of writing the code manually all the time
- The two most popular JS implementations found are:

  - Full of unsolved issues
  - Lack of working examples
  - Lack of proper documentation
  - Not clear if somebody ever used in production

- It seems the idea is good but no big company / contributor invested in implementation, just single maintainers, whom are clearly overwhelmed by the details and the complexity of the problem.
- The most advanced investment comes from Cloudflare: https://github.com/cloudflare/json-schema-tools and the solution have not yet reached a stable interface.

### OpenAPI

- it's similar to JSON Schema but more extended supporting REST web services

### Resources

- https://apisyouwonthate.com/blog/the-many-amazing-uses-of-json-schema-client-side-validation
- https://stoplight.io/blog/openapi-json-schema/

## uniforms

- https://uniforms.tools/

### Pro

- Compared to others: https://uniforms.tools/docs/compare-matrix
- It supports more formats (JSON Schema, GraphQL) and more themes than any other library
- It seems to be well maintained (13 open issues, 469 closed)
- ~Docs are clear~ at the first sight

### Con

- Nothing really works with these JSON Schema libraries: can't really define a set of checkboxes properly, and/or, the API documentation is missing or incomplete: https://github.com/vazco/uniforms/issues/517 See also `react-jsonschema-form`
- The API doesn't supports the ... `checkbox` input type ... https://uniforms.tools/docs/api-fields

## react-jsonschema-form

- https://github.com/rjsf-team/react-jsonschema-form
- Features:
  - https://rjsf-team.github.io/react-jsonschema-form/
  - https://react-jsonschema-form.readthedocs.io/en/latest/#tips-and-tricks
  - Supported input types: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/core/src/components/widgets
  - Supported data types: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/core/src/components/fields

### Pro

- Declarative form syntax including schema for data, ui, errors / validations
- Supports Bootstrap out of the box, plus Material UI: https://github.com/rjsf-team/react-jsonschema-form/tree/master/packages/material-ui
- Built by / for Mozilla ? ("It is a major component in the kinto-admin project.")
- Built on standards (https://json-schema.org/) which can describe more than forms - even complete UIs with media elements => might be a useful tool on long term
- JSON Schema is cross-language: https://json-schema.org/implementations.html

### Con

- Seems having more features than necessary (for simple use cases)
- Very unfriendly docs
- Very unfriendly main contributor:

## Final Form

- https://final-form.org/react
- https://final-form.org/docs/react-final-form/examples

### Pro

- It has a huge set of examples for various use cases
- It seems to be highly adaptable / extendable

### Con

- Incomplete / airy docs
- Renderprops syntax
- No examples with hooks

## Formik

- https://jaredpalmer.com/formik/

### Pro

- The first tutorial is done with hooks
- It has a huge focus on validation

### Con

- The simplest text input example gives and error when typing in the text (it had no initial values set ...)
- Cannot use proptypes for validations: https://github.com/jaredpalmer/formik/issues/1424 ... Yup is preferred ...
- A very few examples only
- An one man show
