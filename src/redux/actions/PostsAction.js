import { SET_ISLOADING, SET_POSTS } from "./types";
import services from "../../services";
const { API } = services;

export const addPost = (data) => async (dispatch, getstate) => {
  const oldPosts = getstate().postsState.posts;
  const tempPosts = [...oldPosts, data];
  dispatch({
    type: SET_POSTS,
    payload: tempPosts
  });
};

export const getPosts = () => async (dispatch, getstate) => {
  try {
    dispatch({
      type: SET_ISLOADING,
      payload: true
    });
    const response = await API.getPosts();
    debugger;
    dispatch({
      type: SET_POSTS,
      payload: response.data
    });
  } catch (error) {
    console.error(error);
  } finally {
    dispatch({
      type: SET_ISLOADING,
      payload: false
    });
  }
};
