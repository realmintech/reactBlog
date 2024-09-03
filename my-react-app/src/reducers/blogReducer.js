import {
    IS_FEATURED_SUCCESS,
  IS_FEATURED_FAILED,

} from '../constants/userConstants';

export const blogReducer = (state = {}, action) => {
  switch (action.type) {
    case IS_FEATURED_SUCCESS:
      return { category: action.payload };
    case IS_FEATURED_FAILED:
      return { error: action.payload };
    default:
      return state;
  }
};
