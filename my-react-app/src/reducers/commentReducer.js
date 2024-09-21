import {
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
} from '../constants/userConstants';

const initialState = {
  comments: [],
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT_SUCCESS:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case CREATE_COMMENT_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    case GET_COMMENTS_SUCCESS:
      return {
        ...state,
        comments: action.payload,
        error: null,
      };
    case GET_COMMENTS_FAILED:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
