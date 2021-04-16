import React from 'react';

import { ChakraProvider, theme } from '@chakra-ui/react';
import { Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Cart from './components/Cart/Cart';

// import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/admin" component={Admin}></Route>
        <Route path="/cart" component={Cart}></Route>
      </Switch>
    </ChakraProvider>
  );
}

export default App;
