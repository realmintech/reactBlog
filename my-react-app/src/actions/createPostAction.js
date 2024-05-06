import axios from 'axios';
import {
  ADMIN_POST_BLOG_SUCCESS,
  ADMIN_POST_BLOG_FAILED,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILED,
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

export const createBlog =
  (title, imageUrl, category, tags, isFeatured, isPublished, description) =>
  async (dispatch) => {
    console.log('This is title:', title);
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
      dispatch({
        type: ADMIN_POST_BLOG_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: ADMIN_POST_BLOG_FAILED,
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

export const getBlog = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:3000/blogs');
    dispatch({
      type: GET_BLOG_SUCCESS,
      payload: response.data,
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    dispatch({
      type: GET_BLOG_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

// export const deletePost = () => async(dispatch) => {
//   try {
//     const response = axios.delete('http://localhost:3000/blogs');
//     dispatch({
//       type:
//     })
//   } catch (error) {
    
//   }
// }
