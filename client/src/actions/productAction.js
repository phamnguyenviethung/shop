import productApi from '../api/productApi';
import {
  GET_PRODUCT_LIST_REQUEST,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAIL,
  PRODUCT_FILTER,
} from './actionsTypes';

export const getProductList = limit => async dispatch => {
  dispatch({ type: GET_PRODUCT_LIST_REQUEST, payload: [] });

  try {
    const productList = await productApi.getAllProducts(limit);

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

export const filter = payload => (dispatch, getState) => {
  const { sort } = getState().filter;

  dispatch({
    type: PRODUCT_FILTER,
    payload: {
      sort,
      select: payload,
    },
  });
};
export const sort = payload => (dispatch, getState) => {
  const { select } = getState().filter;

  dispatch({
    type: PRODUCT_FILTER,
    payload: {
      select,
      sort: `&sort=${payload}`,
    },
  });
};
