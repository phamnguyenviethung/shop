import { Container, Flex, Text, Button } from '@chakra-ui/react';
import React from 'react';
import { AiOutlineShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <Flex
      direction="column"
      justifyContent="center"
      alignItems="center"
      h="full"
    >
      <AiOutlineShopping size={200} />
      <Text fontSize="3xl" my={4}>
        No items found in cart{' '}
      </Text>
      <Link to="/">
        <Button>Shop now</Button>
      </Link>
    </Flex>
  );
};

export default CartEmpty;
