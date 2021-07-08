import React from 'react';
import { Container } from '@chakra-ui/react';
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';

const Cart = () => {
  const cart = useSelector(state => state.cart.cartItems);
  const auth = useSelector(state => state.user.user);

  if (Object.keys(auth).length === 0) {
    return <Redirect to="/login" />;
  }

  return (
    <Container w="full" maxW="full" px={0} my={6} h="100vh">
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
