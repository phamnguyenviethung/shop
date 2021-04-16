import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREASE,
  DECREASE,
} from '../actions/actionsTypes';

const cartReducers = (
  state = { cartItems: JSON.parse(localStorage.getItem('cartItems') || '[]') },
  action
) => {
  switch (action.type) {
    case ADD_TO_CART:
      return { cartItems: action.payload.cartItems };
    case REMOVE_FROM_CART:
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
