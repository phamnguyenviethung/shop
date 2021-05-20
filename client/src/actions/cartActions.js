import {
  ADD_TO_CART,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
  REMOVE_FROM_CART,
  INCREASE,
  DECREASE,
  CLEAR_CART,
  UPDATE_CART_FAIL,
} from './actionsTypes';
import store from '../store';
import decode from 'jwt-decode';
import userApi from '../api/userApi';
import checkTokenExpire from '../utils/checkTokenExpire';
import { updateToken } from './userActions';

export const getCart = () => async (dispatch, getState) => {
  dispatch({
    type: GET_CART_REQUEST,
    payload: [],
  });
  const token = getState().user.user.token;
  if (checkTokenExpire(token)) {
    await dispatch(updateToken());
  }

  try {
    const currentUserToken = JSON.parse(localStorage.getItem('userInfo')).token;
    const id = decode(currentUserToken)._id;

    const data = await userApi.getCartData(id);
    localStorage.setItem('cartItems', JSON.stringify(data));
    dispatch({
      type: GET_CART_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_CART_FAIL,
      payload: {},
    });
  }
};

export const updateCart = () => async (dispatch, getState) => {
  try {
    const data = getState().cart.cartItems;
    const currentUserToken = JSON.parse(localStorage.getItem('userInfo')).token;
    const id = decode(currentUserToken)._id;

    const response = await userApi.updateCart(id, data);
    localStorage.setItem('cartItems', JSON.stringify(response));
  } catch (error) {
    dispatch({
      type: UPDATE_CART_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response.data,
    });
  }
};

export const addToCart = product => async (dispatch, getState) => {
  const token = getState().user.user.token;
  if (checkTokenExpire(token)) {
    await dispatch(updateToken());
  }
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
  dispatch({
    type: ADD_TO_CART,
    payload: { cartItems },
  });
  dispatch(updateCart());
};

export const removeFromCart = product => async (dispatch, getState) => {
  const token = getState().user.user.token;
  if (checkTokenExpire(token)) {
    await dispatch(updateToken());
  }
  const cartItems = getState()
    .cart.cartItems.slice()
    .filter(x => x._id !== product._id);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch({ type: REMOVE_FROM_CART, payload: { cartItems } });
  dispatch(updateCart());
};

export const increase = product => async (dispatch, getState) => {
  const token = getState().user.user.token;
  if (checkTokenExpire(token)) {
    await dispatch(updateToken());
  }
  const cartItems = getState().cart.cartItems.slice();
  cartItems.forEach(x => {
    if (x._id === product._id) {
      x.count++;
    }
  });
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  dispatch({ type: INCREASE, payload: { cartItems } });
  dispatch(updateCart());
};

export const decrease = product => async (dispatch, getState) => {
  const token = getState().user.user.token;
  if (checkTokenExpire(token)) {
    await dispatch(updateToken());
  }
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
  dispatch(updateCart());
};

export const clearCart = () => {
  const cartItems = [];
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return { type: CLEAR_CART, payload: { cartItems } };
};
