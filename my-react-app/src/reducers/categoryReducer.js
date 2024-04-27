import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS,
} from '../constants/userConstants';

export const categoryReducer = (state = {}, action) => {
  switch (action.type) {
    case CATEGORY_ACTION:
      return { category: action.payload };
    case CATEGORY_ACTION_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};

export const categoryGetReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_CATEGORY_SUCCESS:
      return { category: action.payload };
    case GET_CATEGORY_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
}
