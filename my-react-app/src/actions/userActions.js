import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  ADMIN_POST_BLOG,
} from '../constants/userConstants';

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: USER_LOGIN_REQUEST,
    });
    const config = {
      Headers: {
        'content-Type': 'application/json',
      },
    };
    const { data } = await axios.post(
      'http://localhost:3000/auth/login',
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const register =
  (email, username, password, confirmPassword) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:3000/auth/register', {
        email,
        username,
        password,
        confirmPassword,
      });
      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
      // console.log("this is error msg:", error.response.data.message);
    }
  };

export const postBlog =
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
