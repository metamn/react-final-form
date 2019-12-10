# react-forms

Playin' with React form libraries.

## Goal

The goal is:

1. Describe the form via JSON

- All input fields has to be supported
- Grouping has to be supported

2. Auto generate the form fields using a theme (Material UI, Boostrap, etc.)

- Every aspect of the theme must be customizable

3. Validation and error messaging

- Done automatically from the schema

4. Extendable

- The whole business logic mut be customizable

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

## react-jsonschema-form

- https://github.com/rjsf-team/react-jsonschema-form

### Pro

- Declarative form syntax including schema for data, ui, errors (validations)

### Con

- Bootstrap style
- Seems having more features than necessary (for simple use cases)
