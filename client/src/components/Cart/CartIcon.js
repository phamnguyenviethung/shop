import React, { useEffect, useState } from 'react';
import { Stack, Text } from '@chakra-ui/react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('userInfo')).token;
    if (token) {
      setNumber(JSON.parse(localStorage.getItem('cartItems')).length);
    } else {
      setNumber(0);
    }
  }, []);

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
