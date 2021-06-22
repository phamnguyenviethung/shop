import productApi from '../api/productApi';
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  PRODUCT_FILTER,
} from './actionsTypes';

export const getProductList = () => async dispatch => {
  dispatch({ type: GET_PRODUCT_LIST_REQUEST, payload: [] });

  try {
    const productList = await productApi.list();

    localStorage.setItem('products', JSON.stringify(productList));

    dispatch({ type: GET_PRODUCT_LIST_SUCCESS, payload: productList });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_LIST_FAIL,
      payload: {
        error:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response.data,
        status: 'Failed',
      },
    });
  }
};

export const filter = payload => dispatch => {
  dispatch({
    type: PRODUCT_FILTER,
    payload,
  });
};
