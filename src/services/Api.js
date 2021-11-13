import axios from "axios";
import { posts } from "./ApiUris";

const create = (baseUrl) => {
  const api = axios.create({
    baseURL: baseUrl,
    timeout: 6000,
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Accept: "application/json"
    }
  });

  const apis = {};

  apis.getPosts = () => {
    return api.get(posts.GET_POSTS);
  };

  return apis;
};

// let's return back our create method as the default.
export default {
  create
};
