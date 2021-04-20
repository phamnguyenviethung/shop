import React from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';

const Navbar = () => {
  return (
    <Flex w="full" h="80px" alignItems="center" justifyContent="space-around">
      <Link to="/">
        <Text
          textTransform="lowercase"
          fontWeight="700"
          fontSize="lg"
          fontFamily="Poppins, sans-serif"
          thewalkingfish
        >
          thewalkingfish
        </Text>
      </Link>
      <HStack>
        <Link to="/" px={2}>
          Home
        </Link>
        <Link to="/cart" px={2}>
          Cart
        </Link>
        <Link to="/admin" px={2}>
          Admin
        </Link>
        <Link to="/checkout" px={2}>
          Checkout
        </Link>
      </HStack>
      <Link to="/cart">
        <CartIcon />
      </Link>
    </Flex>
  );
};

export default Navbar;
