import {
  ADMIN_POST_BLOG_SUCCESS,
  ADMIN_POST_BLOG_FAILED,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILED,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILED,
  EDIT_BLOG_SUCCESS,
  EDIT_BLOG_FAILED,
  GET_FEATURED_BLOG_SUCCESS,
  GET_FEATURED_BLOG_FAILED,
} from '../constants/userConstants';

export const createPostReducer = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_POST_BLOG_SUCCESS:
      return { userInfo: action.payload };
    case ADMIN_POST_BLOG_FAILED:
      return { userInfo: action.payload };

    case GET_BLOG_SUCCESS:
      return { userInfo: action.payload };
    case GET_BLOG_FAILED:
      return { error: action.payload };

    case GET_FEATURED_BLOG_SUCCESS:
      return { featuredBlogs: action.payload };
    case GET_FEATURED_BLOG_FAILED:
      return { error: action.payload };

    case DELETE_BLOG_SUCCESS:
      return {
        createPost: state.createPost.filter(
          (createPost) => createPost._id !== action.payload
        ),
      };
    case DELETE_BLOG_FAILED:
      return { error: action.payload };

    case EDIT_BLOG_SUCCESS:
      return {
        createPost: state.createPost.filter(
          (createPost) => createPost._id !== action.payload
        ),
      };

    case EDIT_BLOG_FAILED:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};
