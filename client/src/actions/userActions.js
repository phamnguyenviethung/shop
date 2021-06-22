import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_SIGN_OUT,
  USER_VERIFY_TOKEN,
} from './actionsTypes';
import userApi from '../api/userApi';
import checkTokenExpire from '../utils/checkTokenExpire';

export const login = (email, password) => async dispatch => {
  dispatch({ type: USER_LOGIN_REQUEST, payload: {} });

  try {
    const params = { email, password };

    const data = await userApi.login(params);

    dispatch({ type: USER_LOGIN_SUCCESS, payload: data });
    localStorage.setItem('userInfo', JSON.stringify(data));

    // window.location.replace('/');
  } catch (error) {
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
    const data = await userApi.register(params);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: {
        status: 'Success',
        user: { email: data.email, name: data.name, isAdmin: data.isAdmin },
      },
    });
    // window.location.replace('/');
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
  localStorage.setItem('status', JSON.stringify({ isLogged: false }));
  dispatch({ type: USER_SIGN_OUT, payload: {} });
  window.location.replace('/');
};

export const verifyToken = () => async (dispatch, getState) => {
  const currentUser = getState().user.user;
  const { refreshToken } = currentUser;

  if (checkTokenExpire(refreshToken)) {
    dispatch(signout());
  }

  try {
    const params = { refresh: refreshToken };

    const data = await userApi.refreshTokens(params);

    const updateToken = {
      ...currentUser,
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    };

    dispatch({ type: USER_VERIFY_TOKEN, payload: updateToken });
  } catch (error) {
    console.log(error);
  }
};
