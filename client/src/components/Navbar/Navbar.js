import React from 'react';
import { Flex, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';

import Logo from '../shared/Logo';

const Navbar = () => {
  return (
    <Flex w="full" h="100px" alignItems="center" justifyContent="space-around">
      <Logo src="https://i.imgur.com/FtvHAzy.png" desc="logo" size="100px" />
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
      </HStack>
      <CartIcon />
    </Flex>
  );
};

export default Navbar;
