import axios from 'axios';
import {
  ADMIN_POST_BLOG_SUCCESS,
  ADMIN_POST_BLOG_FAILED,
  GET_BLOG_SUCCESS,
  GET_BLOG_FAILED,
  DELETE_BLOG_SUCCESS,
  DELETE_BLOG_FAILED,
  EDIT_BLOG_SUCCESS,
  EDIT_BLOG_FAILED
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
      payload: response.data?.data,
    });
    // console.log('response is here:',response.data?.data)
    return response.data?.data;
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

export const deleteBlog = (itemId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/blogs/${itemId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });
    dispatch({
      type: DELETE_BLOG_SUCCESS,
      payload: itemId,
    });
    dispatch(getBlog());
  } catch (error) {
    dispatch({
      type: DELETE_BLOG_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};


export const editBlog =
  (editId, editDescription, editName, editImage, editTitle) => async (dispatch) => {
    try {
      let response = await axios.patch(
        `http://localhost:3000/category/${editId}`,
        { editDescription, editName, editImage, editTitle },
        {
          headers: {
            Authorization: `Bearer ${authToken}`,
          },
        }
      );

      dispatch({
        type: EDIT_BLOG_SUCCESS,
        payload: response.data,
      });
      console.log('response data', response.data);
      dispatch(getBlog());
    } catch (error) {
      dispatch(getBlog());

      dispatch({
        type: EDIT_BLOG_FAILED,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };