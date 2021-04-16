import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <StrictMode>
      <ColorModeScript />
      <Router>
        <App />
      </Router>
    </StrictMode>
  </Provider>,
  document.getElementById('root')
);
