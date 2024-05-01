import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
  EDIT_CATEGORY_SUCCESS,
  EDIT_CATEGORY_FAILED,
} from '../constants/userConstants';

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_ACTION:
      return { category: action.payload };
    case CATEGORY_ACTION_FAILED:
      return { error: action.payload };

    case FETCH_CATEGORY_SUCCESS:
      return { category: action.payload };
    case FETCH_CATEGORY_FAILED:
      return { error: action.payload };

    case EDIT_CATEGORY_SUCCESS:
      return {
        category: state.category.filter(
          (category) => category._id !== action.payload
        ),
      };

    case EDIT_CATEGORY_FAILED:
      return {
        error: action.payload,
      };

    case DELETE_CATEGORY_SUCCESS:
      return {
        category: state.category.filter(
          (category) => category._id !== action.payload
        ),
      };

    case DELETE_CATEGORY_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};
