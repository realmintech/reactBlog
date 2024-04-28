import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_FAILURE,
} from '../constants/userConstants';

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return { userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};

export const userRegistrationReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTRATION_SUCCESS:
      return { userInfo: action.payload };
    case USER_REGISTRATION_FAIL:
      return { error: action.payload };
    default:
      return state;
  }
};

export const singleUserReducer = (state = {}, action) => {
  switch (action.type) {
    case FETCH_USER_BY_ID_SUCCESS:
      return {
        ...state,
        user: action.payload,
        error: null,
      };

    case FETCH_USER_BY_ID_FAILURE:
      return {
        ...state,
        user: null,
        error: action.payload,
      };
    default:
      return state;
  }
};
