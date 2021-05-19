import React from 'react';
import { Flex, HStack, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import CartIcon from '../Cart/CartIcon';
import { useLocation } from 'react-router';
import checkPathName from '../../utils/checkPathName';
import { useDispatch, useSelector } from 'react-redux';
import { signout } from '../../actions/userActions';

const Navbar = ({ cart }) => {
  const location = useLocation();
  const path = checkPathName(location.pathname);

  const dispatch = useDispatch();

  const user = useSelector(state => state.user.user.name);
  if (!path) {
    return null;
  }

  return (
    <Flex w="full" h="80px" alignItems="center" justifyContent="space-around">
      <Link to="/">
        <Text
          textTransform="lowercase"
          fontWeight="700"
          fontSize="lg"
          fontFamily="Poppins, sans-serif"
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
        <HStack>
          <Link to="/admin" px={2}>
            Admin
          </Link>
          <Link to="/checkout" px={2}>
            Checkout
          </Link>
        </HStack>
      </HStack>

      {user ? (
        <HStack>
          <Text>Hi {user}</Text>
          <Text cursor="pointer" onClick={() => dispatch(signout())}>
            Sign Out
          </Text>
        </HStack>
      ) : (
        <HStack>
          <Link to="/login" px={2}>
            Login
          </Link>
          <Link to="/register" px={2}>
            Register
          </Link>
        </HStack>
      )}

      <Link to="/cart">
        <CartIcon length={cart} />
      </Link>
    </Flex>
  );
};

export default Navbar;
