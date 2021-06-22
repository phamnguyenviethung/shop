import React from 'react';
import { Container, Image, Flex, Text, Heading } from '@chakra-ui/react';

const NotFound = () => {
  return (
    <Container maxW="full" h="600px">
      <Flex
        justifyContent="center"
        alignItems="center"
        direction="column"
        h="full"
      >
        <Image
          src="https://i.imgur.com/cPk0vdt.png"
          alt="404"
          boxSize="350px"
        />
        <Heading color="red.400">Oops!</Heading>
        <Text>Chúng tôi không tìm thấy trang bạn truy cập...!</Text>
      </Flex>
    </Container>
  );
};

export default NotFound;
