import React, { useEffect, useState } from 'react';
import { Container } from '@chakra-ui/react';
import CartTable from './CartTable';
import CartEmpty from './CartEmpty';
import userApi from '../../api/userApi';
import jwtDecode from 'jwt-decode';
import { useDispatch, useSelector } from 'react-redux';
import { saveCart } from '../../actions/cartActions';
import store from '../../store';

const Cart = () => {
  const dispatch = useDispatch();

  const cart = useSelector(state => state.cart.cartItems);
  useEffect(() => {
    const getCart = async () => {
      try {
        const currentUserToken = JSON.parse(
          localStorage.getItem('userInfo')
        ).token;
        const id = jwtDecode(currentUserToken)._id;

        const data = await userApi.getCartData(id);
        dispatch(saveCart(data));
      } catch (error) {
        console.log(error);
      }
    };
    getCart();
  }, []);
  return (
    <Container w="full" maxW="95%" px={0} h="100vh">
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
