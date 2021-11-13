// import { ADD_POSTS } from "../actions/types";

const initialState = {
  user: { name: "Mohamad" },
  isLoading: false
};
// action: { type, payload }
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "EDIT_USER":
      console.log("ACTION ", action);
      return {
        ...state
      };
    default:
      return state;
  }
};

export default AuthReducer;
