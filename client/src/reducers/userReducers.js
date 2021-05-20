import {
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGIN_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_REGISTER_FAIL,
  USER_SIGN_OUT,
  USER_UPDATE_TOKEN,
} from '../actions/actionsTypes';

const userReducers = (
  state = { user: JSON.parse(localStorage.getItem('userInfo') || '{}') },
  action
) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, user: action.payload, logged: false };
    case USER_LOGIN_SUCCESS:
      return { loading: false, user: action.payload, logged: true };
    case USER_LOGIN_FAIL:
      return { loading: false, user: action.payload, logged: false };

    case USER_REGISTER_REQUEST:
      return { loading: true, user: action.payload };
    case USER_REGISTER_SUCCESS:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, user: action.payload };

    case USER_SIGN_OUT:
      return { loading: false, user: action.payload };

    case USER_UPDATE_TOKEN:
      return { loading: false, user: action.payload };

    default:
      return state;
  }
};

export default userReducers;
