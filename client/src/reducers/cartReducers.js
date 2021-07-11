import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE,
  DECREASE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  GET_CART_FAIL,
} from '../actions/actionsTypes';

const cartReducers = (
  state = {
    cartItems: JSON.parse(localStorage.getItem('cartItems')) || [],
    price: 0,
  },
  action
) => {
  switch (action.type) {
    case UPDATE_CART_REQUEST:
      return { loading: true, cartItems: action.payload };
    case UPDATE_CART_SUCCESS:
      return { loading: false, cartItems: action.payload };
    case UPDATE_CART_FAIL:
      return { loading: true, error: action.payload, cartItems: [] };

    case GET_CART_REQUEST:
      return {
        loading: true,
        cartItems: action.payload,
        price: 0,
      };
    case GET_CART_SUCCESS:
      return {
        loading: false,
        cartItems: action.payload.cart,
        price: action.payload.price,
      };
    case GET_CART_FAIL:
      return {
        loading: false,
        cartItems: [],
        price: [],
        error: action.payload.data,
      };

    case ADD_TO_CART:
      return {
        cartItems: action.payload.cartItems,
        price: action.payload.price,
      };
    case REMOVE_FROM_CART:
      return {
        cartItems: action.payload.cartItems,
        price: action.payload.price,
      };
    case CLEAR_CART:
      return {
        cartItems: action.payload.cartItems,
        price: action.payload.price,
      };
    case INCREASE:
      return {
        cartItems: action.payload.cartItems,
        price: action.payload.price,
      };
    case DECREASE:
      return {
        cartItems: action.payload.cartItems,
        price: action.payload.price,
      };

    default:
      return state;
  }
};

export default cartReducers;
