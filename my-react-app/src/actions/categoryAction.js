import axios from 'axios';
import { CATEGORY_ACTION } from '../constants/userConstants';

export const categoryAction = (category, author) => async (dispatch) => {
  try {
    const response = await axios.post('http://localhost:3000/category', {
      category,
      author,
    });
    dispatch({
      type: CATEGORY_ACTION,
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: CATEGORY_ACTION,
      payload:
        error.response && error.response.data
          ? error.response.data.message
          : error.message,
    });
  }
};
