import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
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
