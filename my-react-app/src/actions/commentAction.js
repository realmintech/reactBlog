import axios from 'axios';
import {
  CREATE_COMMENT_SUCCESS,
  CREATE_COMMENT_FAILED,
  GET_COMMENTS_SUCCESS,
  GET_COMMENTS_FAILED,
  DELETE_COMMENTS_SUCCESS,
  DELETE_COMMENTS_FAILED,
} from '../constants/userConstants';
const API = process.env.REACT_APP_API_URL;

const getTokenString = localStorage.getItem('userInfo');
let authToken;
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token?.token;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo
} catch (error) {
  console.error('Error parsing userInfo:', error);
}

export const createComment = (postId, content) => async (dispatch) => {
  try {
    if(!authToken){
      window.alert('You must login before you comment.')
    }
    const response = await axios.post(
      `${API}/comment/${postId}`,
      { content },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${authToken}`,
        },
      }
    );
    dispatch({
      type: CREATE_COMMENT_SUCCESS,
      payload: response.data,
    });
    getPostComments()
  } catch (error) {
    dispatch({
      type: CREATE_COMMENT_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getPostComments = (postId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/comment/${postId}`);
    dispatch({
      type: GET_COMMENTS_SUCCESS,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: GET_COMMENTS_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};


export const deletePostComments = (postId) => async (dispatch) => {
  try {
    const response = await axios.delete(`${API}/comment/${postId}`);
    dispatch({
      type: DELETE_COMMENTS_SUCCESS,
      payload: response.data,
    });
    getPostComments()
  } catch (error) {
    dispatch({
      type: DELETE_COMMENTS_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,                            
    });
  }
};