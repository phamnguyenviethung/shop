import React from 'react';
import { Box, Flex, Skeleton, SkeletonText } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';

const ProductsListGridLoading = ({ item }) => {
  const items = [];
  for (let i = 0; i < item; i++) {
    items.push(item);
  }

  return (
    <SimpleGrid columns={[1, 1, 2, 3]} w="full" spacing="8px">
      {items.map(() => {
        return (
          <Flex
            direction="column"
            alignItems="center"
            key={item * Math.random() + item * Math.random()}
          >
            <Box padding="6" boxShadow="lg" bg="white">
              <Skeleton w="350px" h="250px" />
              <SkeletonText mt="4" noOfLines={1} spacing="4" />
              <SkeletonText mt="4" noOfLines={1} spacing="4" w="30%" />
              <SkeletonText mt="4" noOfLines={1} spacing="4" w="10%" />
            </Box>
          </Flex>
        );
      })}
    </SimpleGrid>
  );
};

export default ProductsListGridLoading;
