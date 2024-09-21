import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import {
  userLoginReducer,
  userRegistrationReducer,
  singleUserReducer,
} from './reducers/userReducers';
import { commentReducer } from './reducers/commentReducer';
import { categoryReducer } from './reducers/categoryReducer';
import { createPostReducer } from './reducers/createPostReducer';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegistration: userRegistrationReducer,
  category: categoryReducer,
  singleUser: singleUserReducer,
  post: createPostReducer,
  comments: commentReducer,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
  // comments: [],
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
