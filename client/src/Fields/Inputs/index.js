import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  bgColor: PropTypes.string,
  maxW: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  maxW: '100%',
};

function InputField({
  field,
  form,
  type,
  label,
  placeholder,
  disabled,
  maxW,
  required,
  bgColor,
}) {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormControl isInvalid={showError} isRequired={required}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Input
        id={name}
        {...field}
        type={type}
        disabled={disabled}
        placeholder={placeholder}
        maxW={maxW}
        bgColor={bgColor}
        _focus={{
          outline: 0,
        }}
      />
      {showError && <FormErrorMessage>{errors[name]}</FormErrorMessage>}
    </FormControl>
  );
}

export default InputField;
