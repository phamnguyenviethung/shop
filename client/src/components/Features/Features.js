import { Center, Flex, Text } from '@chakra-ui/layout';
import React from 'react';

import { featuresData } from './data';

const Features = () => {
  return (
    <Center w="full" h={['400px', '200px']} mb={2} mt={0}>
      <Flex
        w="full"
        h="full"
        p={[2]}
        alignItems={['flex-start', 'center']}
        justifyContent={['space-evenly', 'space-around']}
        maxW={['full', '80%']}
        direction={['column', 'column', 'row']}
      >
        {featuresData.map((item, key) => {
          return (
            <Flex alignItems="center">
              {item.icon}
              <Flex ml={4} direction="column">
                <Text textAlign="left" w="full" fontSize="lg" fontWeight="bold">
                  {item.title}
                </Text>

                <Text textAlign="left" w="full" mt={0}>
                  {item.desc}
                </Text>
              </Flex>
            </Flex>
          );
        })}
      </Flex>
    </Center>
  );
};

export default Features;
