import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGN_OUT,
  USER_VERIFY_TOKEN,
} from '../actions/actionsTypes';

const userReducers = (
  state = {
    user: JSON.parse(localStorage.getItem('userInfo')) || {},
    isLogged:
      Object.keys(JSON.parse(localStorage.getItem('userInfo')) || {}).length >
        0 || false,
  },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return {
        isLogged: false,
        loading: true,
        user: action.payload,
      };
    case USER_LOGIN_SUCCESS:
      return {
        isLogged: true,
        loading: false,
        user: action.payload,
      };
    case USER_LOGIN_FAIL:
      return {
        isLogged: false,
        loading: false,
        user: {},
        ...action.payload,
      };

    case USER_REGISTER_REQUEST:
      return { isLogged: false, loading: true, user: action.payload };
    case USER_REGISTER_SUCCESS:
      return { isLogged: false, loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { isLogged: false, loading: false, user: {}, ...action.payload };

    case USER_SIGN_OUT:
      return { isLogged: false, user: {} };

    case USER_VERIFY_TOKEN:
      return { isLogged: true, user: action.payload };

    default:
      return state;
  }
};

export default userReducers;
