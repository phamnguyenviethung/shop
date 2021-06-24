import React from 'react';
import { Flex, SimpleGrid, Skeleton, SkeletonText } from '@chakra-ui/react';

const SingleProduct = () => {
  return (
    <SimpleGrid columns={[1, 2, 2]} spacing={10} boxSize="full">
      <Flex direction="column" w="full">
        <Flex alignItems="center" w="full">
          <Skeleton height="full" width="55px" mr={2} />
          <SkeletonText noOfLines={3} spacing="4" flex="1" />
        </Flex>

        <Flex alignItems="center" w="full" mt={2}>
          <Skeleton height="full" width="55px" mr={2} />
          <SkeletonText noOfLines={3} spacing="4" flex="1" />
        </Flex>

        <Flex alignItems="center" w="full" mt={2}>
          <Skeleton height="full" width="55px" mr={2} />
          <SkeletonText noOfLines={3} spacing="4" flex="1" />
        </Flex>
      </Flex>
      <Flex direction="column">
        <SkeletonText noOfLines={4} spacing="4" w="80%" />
        <SkeletonText mt="8" noOfLines={2} spacing="4" w="60%" />
      </Flex>
    </SimpleGrid>
  );
};

export default SingleProduct;
