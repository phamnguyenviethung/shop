import React from 'react';
import { Center, Text, HStack, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Breadcrumb = ({ label, path }) => {
  return (
    <Center height="100px" w="full" bgColor="#f7f7f7" mb={10}>
      <HStack spacing="6px">
        <Link to="/">
          <Text
            fontSize="15px"
            color="gray.600"
            fontWeight="600"
            textTransform="uppercase"
          >
            Home
          </Text>
        </Link>

        <Box mx="10px">
          <Text fontWeight="600" fontSize="15px">
            {' '}
            /{' '}
          </Text>
        </Box>

        <Link to={path}>
          <Text fontWeight="600" fontSize="15px" textTransform="uppercase">
            {label}
          </Text>
        </Link>
      </HStack>
    </Center>
  );
};

export default Breadcrumb;
