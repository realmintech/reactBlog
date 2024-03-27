import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  ADMIN_POST_BLOG,
} from "../constants/userConstants";


export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAIL:
      return { loading: false, error: action.payload };
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

export const postBlog = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_POST_BLOG:
      return { userInfo: action.payload };
    default:
      return state;
  }
};