import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const number = useSelector(state => state.cart.cartItems.length);
  return (
    <Stack pos="relative">
      <AiOutlineShoppingCart size={34} />
      <Text
        pos="absolute"
        bottom="60%"
        left="65%"
        px={3}
        py={1}
        bgColor="red.600"
        color="white"
        borderRadius="full"
      >
        {number}
      </Text>
    </Stack>
  );
};

export default CartIcon;
