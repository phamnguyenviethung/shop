import { Center, Flex } from '@chakra-ui/layout';
import { Skeleton, SkeletonText } from '@chakra-ui/skeleton';
import React from 'react';

const ProductDetailLoading = () => {
  return (
    <Center w="full" h="full">
      <Flex w={['full', '80%']} direction={['column', 'column', 'row']}>
        <Skeleton
          w={['full', 'full', '45%']}
          h={['350px', '350px', '400px']}
          mb={[6, 4, 0]}
        />
        <Flex direction="column" w="full" h="full" ml={2}>
          {/* <SkeletonCircle size="10" /> */}
          <Skeleton mt={4} spacing="2" w="90%" h="20px" />
          <SkeletonText mt={4} noOfLines={1} spacing="4" w="26%" h="18px" />
          <SkeletonText mt={10} noOfLines={4} spacing="4" w="80%" />

          <SkeletonText mt={10} noOfLines={2} spacing="4" w="60%" />
          <SkeletonText mt={10} noOfLines={1} spacing="4" w="40%" />
        </Flex>
      </Flex>
    </Center>
  );
};

export default ProductDetailLoading;
