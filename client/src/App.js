import { ChakraProvider, theme } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';
import Cart from './components/Cart/Cart';
import Navbar from './components/Navbar/Navbar';
import Admin from './pages/Admin';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';

// import { ColorModeSwitcher } from './ColorModeSwitcher';
import { getCart } from './actions/cartActions';

function App() {
  const dispatch = useDispatch();
  const cartLength = useSelector(state => state.cart.cartItems.length);
  const user = useSelector(state => state.user.user);

  useEffect(() => {
    if (user.name) {
      dispatch(getCart());
    }
  }, [dispatch, user.name]);

  return (
    <ChakraProvider theme={theme}>
      <Navbar cart={cartLength} />

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
