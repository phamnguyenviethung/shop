import React from 'react';
import { Heading } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CartTable from './CartTable';
const Cart = () => {
  const data = useSelector(state => state.cart.cartItems);
  return (
    <>
      <Heading as="h2" w="full" textAlign="center" my={4}>
        Carts
      </Heading>
      <CartTable data={data} />
    </>
  );
};

export default Cart;
