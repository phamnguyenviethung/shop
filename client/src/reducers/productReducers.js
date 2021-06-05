import {
  GET_PRODUCT_LIST_FAIL,
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
} from '../actions/actionsTypes';

const productReducer = (
  state = JSON.parse(localStorage.getItem('products')) || [],
  action
) => {
  switch (action.type) {
    case GET_PRODUCT_LIST_REQUEST:
      return { loading: true, productList: action.payload };
    case GET_PRODUCT_LIST_SUCCESS:
      return { loading: false, productList: action.payload };
    case GET_PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload, productList: [] };

    default:
      return state;
  }
};

export default productReducer;
