import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_SIGN_OUT,
} from './actionsTypes';
import userApi from '../api/userApi';

export const login = (email, password) => async dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: {} });

  try {
    const params = { email, password };

    const data = await userApi.login(params);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));
    window.location.replace('/');
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: USER_LOGIN_FAIL,
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

export const register = (name, email, password) => async dispatch => {
  dispatch({ type: USER_REGISTER_REQUEST, payload: {} });

  try {
    const params = { name, email, password };
    await userApi.register(params);
    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: {
        status: 'Success',
      },
    });
    window.location.replace('/');
  } catch (error) {
    console.log();
    dispatch({
      type: USER_REGISTER_FAIL,
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

export const signout = () => dispatch => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: USER_SIGN_OUT, payload: {} });
  window.location.replace('/');
};
