import React from 'react';
import { Container, Flex, Heading, Text, Box, Center } from '@chakra-ui/react';
import formatCurrency from '../../../utils/formatCurrency';
import Rate from '../../shared/Rate';
import { Link } from 'react-router-dom';

const Product = ({ item }) => {
  const { name, thumb, price, slug, discount } = item;

  return (
    <Link to={`/product/${slug}`}>
      <Flex
        direction="column"
        alignItems="center"
        justifyContent="center"
        cursor="pointer"
      >
        <Box w="full" h="full" pos="relative">
          <Container
            bgImage={`url(${thumb[0]})`}
            bgPosition="center"
            bgSize="contain"
            bgRepeat="no-repeat"
            pt="50%"
            h="full"
            w="full"
          />
          {discount > 0 && (
            <Box
              pos="absolute"
              top="5px"
              right="60px"
              zIndex="11"
              boxSize="50px"
              bgColor="red.500"
              borderRadius="full"
            >
              <Center boxSize="full">
                <Text
                  textAlign="center"
                  fontSize="14px"
                  color="white"
                  fontWeight="600"
                >
                  {`- ${discount}%`}
                </Text>
              </Center>
            </Box>
          )}
        </Box>
        <Heading
          as="h2"
          size="sm"
          my={4}
          fontWeight="400"
          color="gray.700"
          isTruncated
          maxW="80%"
        >
          {name}
        </Heading>
        <Rate rate={5} />
        <Text size="sm" mb={4} color="black.500" fontWeight="bold">
          {formatCurrency(price)}
        </Text>
      </Flex>
    </Link>
  );
};

export default Product;
