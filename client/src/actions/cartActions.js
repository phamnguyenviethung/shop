import {
  ADD_TO_CART,
  SAVE_CART,
  REMOVE_FROM_CART,
  INCREASE,
  DECREASE,
  CLEAR_CART,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
} from './actionsTypes';
import store from '../store';
import decode from 'jwt-decode';
import userApi from '../api/userApi';

export const saveCart = data => {
  localStorage.setItem('cartItems', JSON.stringify(data));
  return {
    type: SAVE_CART,
    payload: data,
  };
};

export const updateCart = data => async (dispatch, getState) => {
  dispatch({ type: UPDATE_CART_REQUEST });

  try {
    const currentUserToken = JSON.parse(localStorage.getItem('userInfo')).token;
    const id = decode(currentUserToken)._id;

    const response = await userApi.updateCart(id, data);
    dispatch({ type: UPDATE_CART_SUCCESS, payload: response });
    localStorage.setItem('cartItems', JSON.stringify(response));
  } catch (error) {
    dispatch({
      type: UPDATE_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

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

export const increase = product => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x._id === product._id) {
      x.count++;
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch({ type: INCREASE, payload: { cartItems } });
};

export const decrease = product => (dispatch, getState) => {
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x._id === product._id) {
      if (x.count > 0) {
        x.count--;
      }
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch({ type: DECREASE, payload: { cartItems } });
  // dispatch(updateCart(cartItems));
};

export const clearCart = () => {
  const cartItems = [];

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return { type: CLEAR_CART, payload: { cartItems } };
};
