import axios from 'axios';
import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
  GET_CATEGORY_FAILED,
  GET_CATEGORY_SUCCESS
} from '../constants/userConstants';

const getTokenString = localStorage.getItem('userInfo');
let authToken;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token.token;
  console.log('authtoken is :', authToken);
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
    console.log('this is data: ', response.data);

    dispatch({
      type: CATEGORY_ACTION,
      payload: response.data,
    });
    getCategory()
    console.log(response.data);
  } catch (error) {
    console.log(error);
    dispatch({
      type: CATEGORY_ACTION_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCategory = async (dispatch) => {
   try {
    const res = await axios.get(
      'http://localhost:3000/category',
    );
    dispatch({
      type: GET_CATEGORY_SUCCESS,
      payload: res.data,
    })
   console.log('message',res.data);
   return res.data
  } catch (error) {
    dispatch({
      type: GET_CATEGORY_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
    console.log('This is get failed:',error.response.data.message);
  }
}