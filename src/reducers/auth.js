import {
  USER_REGISTERED,
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED,
  USER_LOGOUT,
} from '../actions';

const initialState = {
  login: [],
  authenticated: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case USER_REGISTERED:
      return { ...state, authenticated: true, login: action.payload  };
    case USER_AUTHENTICATED:
      return { ...state, authenticated: true };
    case USER_UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case CHECK_IF_AUTHENTICATED:
      return { ...state };
    case USER_LOGOUT: 
      return {...state};
    default:
      return state;
  }
};
