import { ADMIN_POST_BLOG} from '../constants/userConstants'
export const createPost = (state = {}, action) => {
  switch (action.type) {
    case ADMIN_POST_BLOG:
      return { userInfo: action.payload };
    default:
      return state;
  }
};
