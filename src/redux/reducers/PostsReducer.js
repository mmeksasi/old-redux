import { SET_POSTS, SET_ISLOADING } from "../actions/types";

const initialState = {
  posts: [
    { id: 1, name: "post1" },
    { id: 2, name: "post2" }
  ],
  isLoading: false
};
// action: { type, payload }
const PostsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POSTS:
      debugger;
      return {
        ...state,
        posts: action.payload
      };
    case SET_ISLOADING:
      debugger;
      return {
        ...state,
        isLoading: action.payload
      };
    default:
      return state;
  }
};

export default PostsReducer;
