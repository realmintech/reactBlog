import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { userLoginReducer, userRegistrationReducer } from "./reducers/userReducers";
import { categoryReducer } from "./reducers/categoryReducer";

const reducer = combineReducers({
  userLogin: userLoginReducer,
  userRegistration: userRegistrationReducer,
  categoryReducer: categoryReducer,
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
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