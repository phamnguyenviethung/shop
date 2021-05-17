import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  CLEAR_CART,
  INCREASE,
  DECREASE,
  UPDATE_CART_REQUEST,
  UPDATE_CART_SUCCESS,
  UPDATE_CART_FAIL,
  GET_CART_FAIL,
  GET_CART_REQUEST,
  GET_CART_SUCCESS,
  SAVE_CART,
} from '../actions/actionsTypes';

const cartReducers = (
  state = { cartItems: JSON.parse(localStorage.getItem('cartItems')) || [] },
  action
) => {
  switch (action.type) {
    case UPDATE_CART_REQUEST:
      return { loading: true };
    case UPDATE_CART_SUCCESS:
      return { loading: false, cartItems: action.payload };
    case UPDATE_CART_FAIL:
      return { loading: false, error: action.payload };

    case SAVE_CART:
      return { cartItems: action.payload };

    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
      return { cartItems: action.payload.cartItems };
    case CLEAR_CART:
      return { cartItems: action.payload.cartItems };
    case INCREASE:
      return { cartItems: action.payload.cartItems };
    case DECREASE:
      return { cartItems: action.payload.cartItems };

    default:
      return state;
  }
};

export default cartReducers;
