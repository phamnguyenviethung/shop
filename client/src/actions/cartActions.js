import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE,
  DECREASE,
} from './actionsTypes';
import store from '../store';

export const addToCart = product => {
  const cartItems = store.getState().cart.cartItems.slice();
  let alreadyExists = false;
  cartItems.forEach(x => {
    if (x._id === product._id) {
      alreadyExists = true;
      x.count++;
    }
  });
  if (!alreadyExists) {
    cartItems.push({ ...product, count: 1 });
  }
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return {
    type: ADD_TO_CART,
    payload: { cartItems },
  };
};

export const removeFromCart = product => {
  const cartItems = store
    .getState()
    .cart.cartItems.slice()
    .filter(x => x._id !== product._id);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return { type: REMOVE_FROM_CART, payload: { cartItems } };
};

export const increase = product => {
  const cartItems = store.getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x._id === product._id) {
      x.count++;
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return { type: INCREASE, payload: { cartItems } };
};

export const decrease = product => {
  const cartItems = store.getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x._id === product._id) {
      if (x.count > 0) {
        x.count--;
      }
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return { type: DECREASE, payload: { cartItems } };
};
