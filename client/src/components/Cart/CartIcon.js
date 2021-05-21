import React from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';

const CartIcon = ({ length }) => {
  return (
    <Stack pos="relative">
      <AiOutlineShoppingCart size={24} />
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
        {length}
      </Text>
    </Stack>
  );
};

export default CartIcon;
