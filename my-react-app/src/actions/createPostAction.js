import axios from 'axios';
import { ADMIN_POST_BLOG } from '../constants/userConstants';

const getTokenString = localStorage.getItem('userInfo');
let authToken;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token.token;
} catch (error) {
  console.error('Error parsing adminInfo:', error);
}
export const createBlog =
  (title, imageUrl, category, tags, isFeatured, isPublished, description) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:3000/blogs',
        {
          title,
          imageUrl,
          category,
          tags,
          isFeatured,
          isPublished,
          description,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`,
          },
        }
      );
      dispatch(createBlog());
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
