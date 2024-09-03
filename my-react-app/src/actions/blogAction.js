import axios from 'axios';
import {
  IS_FEATURED_SUCCESS,
  IS_FEATURED_FAILED,
} from '../constants/userConstants';

const getTokenString = localStorage.getItem('userInfo');
let authToken;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token.token;
  console.log('Get token:', getTokenString);
} catch (error) {
  console.error('Error parsing adminInfo:', error);
}

export const createBlogOnWebPage =
  (title, imageUrl, category, tags, isFeatured, isPublished, description) =>
  async (dispatch) => {
    try {
      const response = await axios.post(
        'http://localhost:8080/blogs/featured',
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
      dispatch({
        type: IS_FEATURED_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: IS_FEATURED_FAILED,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
      console.log(
        'error message:',
        error.response ? error.response.data.message : error.message
      );
    }
  };
