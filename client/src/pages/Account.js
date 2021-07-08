import React from 'react';
import { Container, SimpleGrid, VStack, Heading } from '@chakra-ui/react';
import Login from '../components/Auth/Form/Login';
import Register from '../components/Auth/Form/Register';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

const Account = () => {
  const toast = useToast();
  const auth = useSelector(state => state.user.isLogged);
  if (auth) {
    window.location.replace('/');
  }

  return (
    <Container minH="600px" maxW="full" w="90%" mt={16}>
      <SimpleGrid columns={[1, 1, 2]} spacing={10} w="full">
        <VStack w="full">
          <Heading
            as="h4"
            fontSize="md"
            color="gray.600"
            fontWeight="400"
            textTransform="uppercase"
          >
            Đăng nhập
          </Heading>
          <Login toast={toast} />
        </VStack>
        <VStack w="full">
          <Heading
            as="h4"
            fontSize="md"
            color="gray.600"
            fontWeight="400"
            textTransform="uppercase"
          >
            Đăng ký
          </Heading>
          <Register toast={toast} />
        </VStack>
      </SimpleGrid>
    </Container>
  );
};

export default Account;
