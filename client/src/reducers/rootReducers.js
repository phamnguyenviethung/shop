import { combineReducers } from 'redux';
import cartReducers from './cartReducers';
import userReducers from './userReducers';
import productReducers from './productReducers';
import filterReducers from './filterReducer';

const rootReducer = combineReducers({
  cart: cartReducers,
  user: userReducers,
  product: productReducers,
  filter: filterReducers,
  
});

export default rootReducer;
