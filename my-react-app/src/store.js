import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import {
  userLoginReducer,
  userRegistrationReducer,
  singleUserReducer,
} from './reducers/userReducers';
import { categoryReducer } from './reducers/categoryReducer';
import { createPostReducer } from './reducers/createPostReducer';
// import { getFeaturedBlogs } from './actions/createPostAction';

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegistration: userRegistrationReducer,
  category: categoryReducer,
  singleUser: singleUserReducer,
  createPost: createPostReducer,
  // featuredBlogs: getFeaturedBlogs,
});

const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;

const initialState = {
  userLogin: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
