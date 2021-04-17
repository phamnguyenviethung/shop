import { combineReducers } from 'redux';
import cartReducers from './cartReducers';
import orderReducers from './orderReducers';

const rootReducer = combineReducers({
  cart: cartReducers,
  // order: orderReducers,
});

export default rootReducer;
