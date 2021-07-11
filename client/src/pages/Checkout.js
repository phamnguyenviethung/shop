import { Container, Flex } from '@chakra-ui/react';
import React from 'react';
import { useSelector } from 'react-redux';
import UserInfo from '../components/Checkout/UserInfo';
import OrderInfo from '../components/Checkout/OrderInfo';

const Checkout = () => {
  const data = useSelector(state => state.cart);

  return (
    <Container w="full" maxW={['full', '75%']}>
      <Flex direction={['column', 'column', 'row']}>
        <UserInfo cart={data} />
        <OrderInfo data={data} />
      </Flex>
    </Container>
  );
};

export default Checkout;
