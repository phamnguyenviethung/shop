import PropTypes from 'prop-types';
import React from 'react';
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
  required: PropTypes.bool,
};

TextareaField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
};

function TextareaField({
  field,
  form,
  type,
  label,
  placeholder,
  disabled,
  required,
}) {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];
  console.log(field);

  return (
    <FormControl isRequired={required}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Textarea
        mb={2}
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        invalid={showError}
      />

      {showError && <FormErrorMessage>{errors[name]}</FormErrorMessage>}
    </FormControl>
  );
}

export default TextareaField;
