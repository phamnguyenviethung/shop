import React, { useState, useEffect } from 'react';
import { Container, Heading, Text, Flex } from '@chakra-ui/react';
import OrderList from '../components/Profile/OrderList';
import { useSelector } from 'react-redux';

import userApi from '../api/userApi';

const Profile = () => {
  const [orders, setOrders] = useState([]);
  const uid = useSelector(state => state.user.user.uid);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (uid) {
          const data = await userApi.getOrderByID(uid);
          setOrders(data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getOrders();
  }, [uid]);

  return (
    <Flex py={10} my={10} minH="550px">
      <Container maxW="full" w="90%">
        <Heading as="h2" fontSize="2xl" fontWeight="700">
          Thông tin tài khoản
        </Heading>
        <Text>Xin chào, </Text>
        <OrderList data={orders} />
      </Container>
    </Flex>
  );
};

export default Profile;
