import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Details from './pages/Details';
import Shop from './pages/Shop';
import Search from './pages/Search';
import Footer from './components/Footer';
import { useDispatch, useSelector } from 'react-redux';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { getCart } from './actions/cartActions';
import checkTokenExpire from './utils/checkTokenExpire';
import { verifyToken } from './actions/userActions';
import NotFound from './pages/NotFound';

function App() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart.cartItems);
  const user = useSelector(state => state.user.user);
  const auth = Object.keys(user).length > 0;

  useEffect(() => {
    if (auth) {
      if (checkTokenExpire(user.accessToken)) {
        dispatch(verifyToken());
      }
    }
  }, [auth, dispatch, user.accessToken]);

  useEffect(() => {
    if (auth) {
      dispatch(getCart());
    }
  }, [dispatch, auth]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar cart={cart} />

      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/cart" component={Cart}></Route>
        <Route exact path="/product/:id" component={Details}></Route>
        <Route path="/shop" component={Shop}></Route>
        <Route path="/search" component={Search}></Route>

        <Route path="/login" component={Login}></Route>
        <Route path="/register" component={Register}></Route>
        <Route path="/checkout" component={Checkout}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
      <Footer />
    </ChakraProvider>
  );
}

export default App;
