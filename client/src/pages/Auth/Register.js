import { Flex } from '@chakra-ui/layout';
import React from 'react';
import RegisterForm from '../../components/Auth/Form/Register';

const Register = () => {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      w="full"
      backgroundColor="gray.200"
    >
      <RegisterForm />
    </Flex>
  );
};

export default Register;
