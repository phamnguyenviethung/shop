import { Flex, Text, Button, Image } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';

const CartEmpty = () => {
  return (
    <Flex direction="column" justifyContent="flex-start" alignItems="center">
      <Image
        src="https://i.imgur.com/q5w0YHo.jpg"
        alt="empty cart"
        boxSize="350px"
      />
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
