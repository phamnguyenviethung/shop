import PropTypes from 'prop-types';
import React from 'react';

import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Select,
} from '@chakra-ui/react';

SelectField.propTypes = {
  field: PropTypes.object.isRequired,
  form: PropTypes.object.isRequired,

  label: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  options: PropTypes.array,
};

SelectField.defaultProps = {
  label: '',
  placeholder: '',
  disabled: false,
  required: false,
  options: [],
};

function SelectField({
  field,
  form,
  options,
  label,
  placeholder,
  disabled,
  required,
}) {
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find(option => option.value === value);

  const handleSelectedOptionChange = selectedOption => {
    const selectedValue = selectedOption
      ? selectedOption.target.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormControl isRequired={required}>
      {label && <FormLabel htmlFor={name}>{label}</FormLabel>}

      <Select
        mb={2}
        id={name}
        {...field}
        value={selectedOption || ''}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        isInvalid={showError}
      >
        {options.map((item, key) => {
          return <option key={key}>{item.label}</option>;
        })}
      </Select>
      {showError && <FormErrorMessage>{errors[name]}</FormErrorMessage>}
    </FormControl>
  );
}

export default SelectField;
