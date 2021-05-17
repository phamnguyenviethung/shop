import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import userApi from './api/userApi';
import { saveCart } from './actions/cartActions';
// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    // const cartData =
    //   JSON.parse(localStorage.getItem('userInfo')).cartItems || [];

    dispatch(saveCart([]));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/cart" render={props => <Cart {...props} />} />

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
