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
import decode from 'jwt-decode';
import userApi from '../api/userApi';

const calcPrice = data => {
  // Total
  const reducerTotal = (a, item) => a + item.count * item.price;
  const total = data.reduce(reducerTotal, 0);

  // Discount
  const reducerDiscount = (a, item) =>
    a + (item.count * item.price * item.discount) / 100;
  const discount = data.reduce(reducerDiscount, 0);

  const percent = ((discount / total) * 100).toFixed(0) - 0;

  const price = { total, discount, percent };

  return price;
};

export const getCart = () => async (dispatch, getState) => {
  dispatch({
    type: GET_CART_REQUEST,
    payload: [],
  });
  const token = getState().user.user.accessToken;

  if (token) {
    try {
      const currentUserToken = JSON.parse(
        localStorage.getItem('userInfo')
      ).accessToken;
      const id = decode(currentUserToken)._id;

      const data = await userApi.getCartData(id);
      const cart = data.productList || [];

      localStorage.setItem('cartItems', JSON.stringify(cart));
      dispatch({
        type: GET_CART_SUCCESS,
        payload: { cart, price: calcPrice(cart) },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_CART_FAIL,
        payload: [],
      });
    }
  } else {
    dispatch({
      type: GET_CART_FAIL,
      payload: [],
    });
  }
};

export const updateCart = () => async (dispatch, getState) => {
  try {
    const data = getState().cart.cartItems;
    const currentUserToken = JSON.parse(
      localStorage.getItem('userInfo')
    ).accessToken;
    const id = decode(currentUserToken)._id;

    const response = await userApi.updateCart(id, data);
    localStorage.setItem('cartItems', JSON.stringify(response.productList));
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

export const addToCart =
  (product, selectSize, selectColor) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    const { thumb, quantity, price, name, slug, discount } = product;
    console.log(selectSize, selectColor);

    let alreadyExists = false;
    cartItems.forEach(x => {
      if (
        x.slug === product.slug &&
        x.size === selectSize &&
        x.color === selectColor
      ) {
        alreadyExists = true;
        x.count++;
      }
    });
    if (!alreadyExists) {
      cartItems.push({
        name,
        price,
        thumb,
        quantity,
        slug,
        count: 1,
        size: selectSize,
        color: selectColor,
        discount,
      });
    }

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: ADD_TO_CART,
      payload: { cartItems, price: calcPrice(cartItems) },
    });
    dispatch(updateCart());
  };

export const removeFromCart =
  (product, size, color) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();

    const removeID = cartItems.filter(item => item._id === product._id);
    const removeItem = removeID.filter(
      item => item.size === size && item.color === color
    );
    const removeIndex = cartItems.indexOf(removeItem[0]);

    // Remove item
    cartItems.splice(removeIndex, 1);

    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: REMOVE_FROM_CART,
      payload: { cartItems, price: calcPrice(cartItems) },
    });
    dispatch(updateCart());
  };

export const increase =
  (product, size, color) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach(x => {
      if (x._id === product._id && x.size === size && x.color === color) {
        x.count++;
      }
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: INCREASE,
      payload: { cartItems, price: calcPrice(cartItems) },
    });
    dispatch(updateCart());
  };

export const decrease =
  (product, size, color) => async (dispatch, getState) => {
    const cartItems = getState().cart.cartItems.slice();
    cartItems.forEach(x => {
      if (x._id === product._id && x.size === size && x.color === color) {
        if (x.count > 0) {
          x.count--;
        }
      }
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    dispatch({
      type: DECREASE,
      payload: { cartItems, price: calcPrice(cartItems) },
    });
    dispatch(updateCart());
  };

export const clearCart = () => {
  const cartItems = [];
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  return {
    type: CLEAR_CART,
    payload: { cartItems, price: calcPrice(cartItems) },
  };
};
