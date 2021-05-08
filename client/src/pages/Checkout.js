import { Container, Flex, HStack } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from '../components/Checkout/UserInfo';
import OrderInfo from '../components/Checkout/OrderInfo';

const Checkout = () => {
  const data = useSelector(state => state.cart.cartItems);

  return (
    <HStack>
      <Container height="100vh" px={0} maxW="75%">
        <Flex>
          <UserInfo data={data} />
          <OrderInfo data={data} />
        </Flex>
      </Container>
    </HStack>
  );
};

export default Checkout;
