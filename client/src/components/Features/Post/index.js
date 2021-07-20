import React from 'react';

import { Box, Button, Flex, SimpleGrid, Heading, Text } from '@chakra-ui/react';

export default function PostFeatures(data) {
  return (
    <Flex
      bg="#F9FAFB"
      p={[6, 0, 20]}
      w="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box shadow="xl" bg="white" px={8} py={20} mx="auto">
        <SimpleGrid
          alignItems="start"
          columns={{ base: 1, md: 2 }}
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box>
            <Heading
              as="h2"
              mb={4}
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: 'center', md: 'left' }}
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
            >
              Clear overview for efficient tracking
            </Heading>
            <Text
              mb={5}
              textAlign={{ base: 'center', sm: 'left' }}
              color="gray.600"
              fontSize={{ md: 'lg' }}
            >
              Handle your subscriptions and transactions efficiently with the
              clear overview in Dashboard. Features like the smart search option
              allow you to quickly find any data you’re looking for.
            </Text>
            <Button
              cur="pointer"
              w={{ base: 'full', sm: 'auto' }}
              size="lg"
              bg="gray.900"
              _hover={{ bg: 'gray.700' }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box w="full" h="full" py={48} bg="gray.200"></Box>
        </SimpleGrid>
        <SimpleGrid
          alignItems="center"
          columns={{ base: 1, md: 2 }}
          flexDirection="column-reverse"
          mb={24}
          spacingY={{ base: 10, md: 32 }}
          spacingX={{ base: 10, md: 24 }}
        >
          <Box order={{ base: 'none', md: 2 }}>
            <Heading
              as="h2"
              mb={4}
              fontSize={{ base: '2xl', md: '4xl' }}
              fontWeight="extrabold"
              letterSpacing="tight"
              textAlign={{ base: 'center', md: 'left' }}
              color="gray.900"
              lineHeight={{ md: 'shorter' }}
            >
              Decide how you integrate Payments
            </Heading>
            <Text
              mb={5}
              textAlign={{ base: 'center', sm: 'left' }}
              color="gray.600"
              fontSize={{ md: 'lg' }}
            >
              Love to code? Next to our ready-made and free plugins you can use
              our expansive yet simple API; decide how you integrate Payments
              and build advanced and reliable products yourself from scratch.
            </Text>
            <Button
              cursor="pointer"
              w={{ base: 'full', sm: 'auto' }}
              size="lg"
              bg="gray.900"
              _hover={{ bg: 'gray.700' }}
              color="gray.100"
              as="a"
            >
              Learn More
            </Button>
          </Box>
          <Box w="full" h="full" py={48} bg="gray.200"></Box>
        </SimpleGrid>
      </Box>
    </Flex>
  );
}
