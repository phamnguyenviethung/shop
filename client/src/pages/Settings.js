import React from 'react';
import { Container, VStack, Flex, SimpleGrid, Input } from '@chakra-ui/react';
import Card from '../components/Settings/Card';

const Settings = () => {
  return (
    <Container maxW="full" w="full" minH="600px">
      <SimpleGrid columns={[1, 1, 2]} spacing={10}>
        <Container maxW="full" w="full">
          <VStack>
            <Input placeholder="extra small size" />
            <Input placeholder="small size" />
            <Input placeholder="medium size" />
            <Input placeholder="large size" />
          </VStack>
        </Container>
        <Container>
          <Card />
        </Container>
      </SimpleGrid>
    </Container>
  );
};

export default Settings;
