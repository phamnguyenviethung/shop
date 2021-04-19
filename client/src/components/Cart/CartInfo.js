import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Flex, Box, Heading, Text, Input, Button } from '@chakra-ui/react';

const CartInfo = () => {
  const cartItems = useSelector(state => state.cart.cartItems);
  const [cartTotal, setcartTotal] = useState(0);

  useEffect(() => {
    const reducer = (a, item) => a + item.count * item.price;
    const total = cartItems.reduce(reducer, 0);
    setcartTotal(total);
  }, [cartItems]);

  return (
    <Flex w="90%" px="5%" my={10} justifyContent="space-between">
      <Box
        bgColor="gray.50"
        h="200px"
        p={10}
        border="solid"
        borderColor="gray.200"
        p={4}
      >
        <Flex direction="column">
          <Heading as="h3">Use Coupon</Heading>
          <Text>Enter your coupon code if you have one.</Text>
          <Input w="full" bgColor="white" mt={2} />
          <Button w="40%" px={4} mt={2}>
            APPLY COUPON
          </Button>
        </Flex>
      </Box>

      <Box
        bgColor="gray.200"
        h="200px"
        p={10}
        border="solid"
        borderColor="gray.50"
        p={4}
      >
        <Flex direction="column">
          <Text fontSize="x-large">Cart Total</Text>
          <Text>Total products: {cartTotal}</Text>
        </Flex>
      </Box>
    </Flex>
  );
};

export default CartInfo;
