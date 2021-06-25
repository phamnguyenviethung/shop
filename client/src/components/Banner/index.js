import { Container, Center, Flex, Text, Button } from '@chakra-ui/react';
import { ArrowForwardIcon } from '@chakra-ui/icons';
import React from 'react';

const Banner = ({ img }) => {
  return (
    <Container w="98%" maxW="full">
      <Center
        bgImage={`url(https://i.imgur.com/CKXS1EP.png)`}
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="center"
        w="full"
        maxW="full"
        pos="relative"
        my={4}
        height="320px"
        borderRadius="md"
      >
        <Flex
          direction="column"
          justifyContent="space-around"
          h="80%"
          alignItems={['center', 'center', 'flex-start']}
          w={['full', 'full', '90%']}
        >
          <Text
            color="white"
            w={['40%', '40%', '30%']}
            fontWeight="700"
            fontSize={['2xl', '3xl', '4xl']}
            textAlign={['center', 'center', 'left']}
          >
            Fast Freeship, Contactless Delivery.
          </Text>
          <Text color="white" textAlign="center" fontWeight="500">
            Try it now, rick free !
          </Text>
          <Button
            bgColor="white"
            maxW={['35%', '60%', '70%']}
            _focus={{
              boxShadow: 0,
            }}
          >
            <Flex alignItems="center" h="full">
              <Text>Shop Now</Text>
              <ArrowForwardIcon ml={1} fontSize="18" />
            </Flex>
          </Button>
        </Flex>
      </Center>
    </Container>
  );
};

export default Banner;
