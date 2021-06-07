import React from 'react';
import { Container } from '@chakra-ui/react';
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
import { useSelector } from 'react-redux';

const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);

  return (
    <Container w="full" maxW="full" px={0} h="100vh">
      {cart.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          <CartTable data={cart} />
        </>
      )}
    </Container>
  );
};

export default Cart;
