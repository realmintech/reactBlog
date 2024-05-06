import {
  ADMIN_POST_BLOG_SUCCESS,
  ADMIN_POST_BLOG_FAILED,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILED,
} from '../constants/userConstants';

export const createPost = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_POST_BLOG_SUCCESS:
      return { userInfo: action.payload };
    case ADMIN_POST_BLOG_FAILED:
      return { userInfo: action.payload };

    case GET_BLOG_SUCCESS:
      return { userInfo: action.payload };
    case GET_BLOG_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};
