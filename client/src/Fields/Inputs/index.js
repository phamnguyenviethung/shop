import PropTypes from 'prop-types';
import React from 'react';
import { ErrorMessage } from 'formik';
import {
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage,
} from '@chakra-ui/react';

InputField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
};

InputField.defaultProps = {
  type: 'text',
  label: '',
  placeholder: '',
  disabled: false,
};

function InputField({ field, form, type, label, placeholder, disabled }) {
  const { name } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  return (
    <FormControl isRequired>
      {label && <FormLabel for={name}>{label}</FormLabel>}

      <Input
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

export default InputField;
