import axios from 'axios';
import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
  FETCH_CATEGORY_FAILED,
  FETCH_CATEGORY_SUCCESS,
  DELETE_CATEGORY_SUCCESS,
  DELETE_CATEGORY_FAILED,
} from '../constants/userConstants';

const getTokenString = localStorage.getItem('userInfo');
let authToken;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token.token;
} catch (error) {
  console.error('Error parsing adminInfo:', error);
}

export const categoryAction = (name) => async (dispatch) => {
  try {
    const response = await axios.post(
      'http://localhost:3000/category',
      {
        name,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    );

    dispatch(getCategory());

    dispatch({
      type: CATEGORY_ACTION,
      payload: response.data,
    });
  } catch (error) {
    dispatch(getCategory());

    dispatch({
      type: CATEGORY_ACTION_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCategory = () => async (dispatch) => {
  try {
    const res = await axios.get('http://localhost:3000/category');
    dispatch({
      type: FETCH_CATEGORY_SUCCESS,
      payload: res.data,
    });
    return res.data;
  } catch (error) {
    dispatch({
      type: FETCH_CATEGORY_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
    console.log('This is get failed:', error.response.data.message);
  }
};

export const deleteCategory = (categoryId) => async (dispatch) => {
  try {
    await axios.delete(`http://localhost:3000/category/${categoryId}`, {
      headers: {
        Authorization: `Bearer ${authToken}`,
      },
    });

    dispatch({
      type: DELETE_CATEGORY_SUCCESS,
      payload: categoryId,
    });

    dispatch(getCategory());
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_CATEGORY_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};
