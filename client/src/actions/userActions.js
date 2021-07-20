import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_FAIL,
  USER_REGISTER_SUCCESS,
  USER_SIGN_OUT,
  USER_VERIFY_TOKEN,
  UPDATE_USER_INFO,
} from './actionsTypes';
import userApi from '../api/userApi';
import authApi from '../api/authApi';
import checkTokenExpire from '../utils/checkTokenExpire';
export const login = (values, toast) => async dispatch => {
  const { email, password } = values;
  dispatch({
    type: USER_LOGIN_REQUEST,
    payload: {},
  });

  try {
    const params = { email, password };

    const data = await authApi.login(params);

    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));

    toast({
      title: 'Đăng nhập thành công',
      status: 'success',
      position: 'bottom-right',
      isClosable: true,
      duration: 1200,
    });

    setTimeout(() => {
      window.location.replace('/');
    }, 1200);
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload: {
        error: error.message,
      },
    });

    toast({
      title: 'Đăng nhập thất bại',
      description: error.message,
      status: 'error',
      position: 'bottom-right',
      isClosable: true,
      duration: 1200,
    });
  }
};

export const register = (values, toast) => async dispatch => {
  const { name, email, password, confirm } = values;
  dispatch({ type: USER_REGISTER_REQUEST, payload: {} });

  try {
    const params = { name, email, password, confirm };
    const data = await authApi.register(params);

    dispatch({
      type: USER_REGISTER_SUCCESS,
      payload: {
        status: 'Success',
        user: { email: data.email, name: data.name, isAdmin: data.isAdmin },
      },
    });

    toast({
      title: 'Đăng ký thành công',
      status: 'success',
      position: 'bottom-right',
      isClosable: true,
      duration: 1200,
    });

    window.location.replace('/');
  } catch (error) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: {
        error: error.message,
      },
    });

    toast({
      title: 'Đăng ký thất bại',
      status: 'error',
      description: error.message,
      position: 'bottom-right',
      isClosable: true,
      duration: 1200,
    });
  }
};

export const signout = () => dispatch => {
  localStorage.removeItem('userInfo');
  localStorage.removeItem('cartItems');
  dispatch({ type: USER_SIGN_OUT, payload: {} });
  window.location.replace('/');
};

export const updateUserInfo = data => (dispatch, getState) => {
  const user = getState().user.user;
  Object.assign(user, data);
  dispatch({ type: UPDATE_USER_INFO, payload: user });
  localStorage.setItem('userInfo', JSON.stringify(user));
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
    dispatch(signout());
  }
};
