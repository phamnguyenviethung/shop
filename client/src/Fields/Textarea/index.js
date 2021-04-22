import PropTypes from 'prop-types';
import React from 'react';
import { ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Textarea,
} from '@chakra-ui/react';

TextareaField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

TextareaField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function TextareaField({ field, form, type, label, placeholder, disabled }) {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormControl>
      {label && <FormLabel for={name}>{label}</FormLabel>}

      <Textarea
        mb={2}
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />

      <ErrorMessage name={name} component={FormErrorMessage} />
    </FormControl>
  );
}

export default TextareaField;
