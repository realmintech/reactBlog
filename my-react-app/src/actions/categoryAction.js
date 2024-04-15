import axios from 'axios';
import {
  CATEGORY_ACTION,
  CATEGORY_ACTION_FAILED,
} from '../constants/userConstants';

export const categoryAction = (name,getState) => async (dispatch) => {
  try {
    const {
      userLogin: { userInfo },
    } = getState();

    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const response = await axios.post('http://localhost:3000/category', {
      name,
    }, config);
    console.log(response)

    dispatch({
      type: CATEGORY_ACTION,
      payload: response.data,
    });
    console.log(response.data)
  } catch (error) {
    dispatch({
      type: CATEGORY_ACTION_FAILED,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
    console.log(error.response.data.message)
  }
};