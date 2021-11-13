import { combineReducers } from "redux";
// Reducers
import postsReducer from "./PostsReducer";
import authReducer from "./AuthReducer";

export default combineReducers({
  postsState: postsReducer,
  authState: authReducer
});
