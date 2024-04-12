import axios from 'axios';
import { ADMIN_POST_BLOG } from '../constants/userConstants';
export const createBlog =
  (title, image, category, description, tag) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/blog/create', {
        title,
        image,
        category,
        description,
        tag,
      });
      dispatch({
        type: ADMIN_POST_BLOG,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_POST_BLOG,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };
