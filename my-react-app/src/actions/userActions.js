import axios from 'axios';
import {
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_REGISTRATION_SUCCESS,
  USER_REGISTRATION_FAIL,
  FETCH_USER_BY_ID_SUCCESS,
  FETCH_USER_BY_ID_FAILURE,
  USER_LOGOUT,
} from '../constants/userConstants';
const API = process.env.REACT_APP_API_URL;

const getTokenString = localStorage.getItem('userInfo');
let authToken;
try {
  const userInfo = JSON.parse(getTokenString);
  authToken = userInfo?.token?.token;
} catch (error) {
  console.error('Error parsing adminInfo:', error);
}

export const login = (email, password, navigate) => async (dispatch) => {
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
      `${API}/auth/login`,
      { email, password },
      config
    );
    dispatch({
      type: USER_LOGIN_SUCCESS,
      payload: data,
    });
    localStorage.setItem('userInfo', JSON.stringify(data));
    if (data?.token?.user?.role === 'admin') {
      navigate('/');
    }else if (data?.token?.user?.role === 'guest') {
      navigate('/');
    } else {
      setTimeout(() => {
        navigate('/access-denied');
      }, 100);
    }
  } catch (error) {
    dispatch({
      type: USER_LOGIN_FAIL,
      payload:
        error?.response && error?.response?.data
          ? error?.response?.data?.message
          : error?.message,
    });
  }
};


export const logout = () => (dispatch) => {
  localStorage.removeItem('userInfo');
  dispatch({ type: USER_LOGOUT });
};

export const register =
  (email, username, password, confirmPassword,navigate) => async (dispatch) => {
    try {
      const response = await axios.post(`${API}/auth/register`, {
        email,
        username,
        password,
        confirmPassword,
      });
      dispatch({
        type: USER_REGISTRATION_SUCCESS,
        payload: response.data,
      });
      navigate('/login');
    } catch (error) {
      dispatch({
        type: USER_REGISTRATION_FAIL,
        payload:
          error.response && error.response.data
            ? error.response.data.message
            : error.message,
      });
    }
  };

export const fetchUserById = (userId) => async (dispatch) => {
  try {
    const response = await axios.get(`${API}/users/${userId}`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`,
      },
    });

    const user = response.data;
    dispatch({
      type: FETCH_USER_BY_ID_SUCCESS,
      payload: user,
    });

    return user;
  } catch (error) {
    dispatch({
      type: FETCH_USER_BY_ID_FAILURE,
      payload: error.response?.data || 'Failed to fetch user',
    });
  }
};
