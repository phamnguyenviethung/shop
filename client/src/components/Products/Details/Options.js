import {
  useRadio,
  HStack,
  useRadioGroup,
  Center,
  Button,
} from '@chakra-ui/react';

function RadioCard(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  if (props.isOutStock) {
    return (
      <Button as="label" variant="unstyled" isDisabled={true}>
        <Center
          cursor="not-allowed"
          borderWidth="1px"
          borderRadius="full"
          boxShadow="md"
          _focus={{
            boxShadow: 'none',
          }}
          boxSize="30px"
          fontSize="14px"
        >
          {props.children}
        </Center>
      </Button>
    );
  }

  return (
    <Button
      as="label"
      onClick={() => props.select(props.value)}
      variant="unstyled"
    >
      <input {...input} />
      <Center
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="full"
        boxShadow="md"
        _checked={{
          bg: 'teal.600',
          color: 'white',
          borderColor: 'teal.600',
        }}
        _focus={{
          boxShadow: 'none',
        }}
        boxSize="30px"
        fontSize="14px"
      >
        {props.children}
      </Center>
    </Button>
  );
}

function SizePicker({ data, select, quantity }) {
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'size',
    defaultValue: 'react',
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group}>
      {data &&
        data.map((value, key) => {
          const radio = getRadioProps({ value });
          return (
            <RadioCard
              key={value}
              {...radio}
              select={select}
              isOutStock={quantity[key] === 0}
            >
              {value}
            </RadioCard>
          );
        })}
    </HStack>
  );
}

export default SizePicker;
