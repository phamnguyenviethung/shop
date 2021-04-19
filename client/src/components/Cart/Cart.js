import React from 'react';
import { Heading, Container } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
const Cart = () => {
  const data = useSelector(state => state.cart.cartItems);
  return (
    <Container w="full" maxW="80%" px={0} h="100vh">
      {data.length === 0 ? (
        <CartEmpty />
      ) : (
        <>
          {/* <Heading as="h2" w="full" textAlign="center" my={4}>
            Carts
          </Heading> */}
          <CartTable data={data} />
        </>
      )}
    </Container>
  );
};

export default Cart;
