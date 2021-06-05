import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Details from './pages/Details';
import Search from './pages/Search';
import { useDispatch, useSelector } from 'react-redux';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { getCart } from './actions/cartActions';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    if (user.name) {
      dispatch(getCart());
    }
  }, [dispatch, user.name]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar cart={cart} />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/search" component={Search}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route exact path="/product/:id" component={Details}></Route>
        <Route path="/search" component={Search}></Route>

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/checkout" component={Checkout}></Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
