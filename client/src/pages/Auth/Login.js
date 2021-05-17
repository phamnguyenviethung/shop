import { Flex } from '@chakra-ui/layout';
import React from 'react';
import LoginForm from '../../components/Auth/Form/Login';

const Login = () => {
  return (
    <Flex
      h="100vh"
      alignItems="center"
      justifyContent="center"
      w="full"
      backgroundColor="gray.200"
    >
      <LoginForm />
    </Flex>
  );
};

export default Login;
