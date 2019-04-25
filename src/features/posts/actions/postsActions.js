import { GET_POSTS_REQUEST, CREATE_POST_REQUEST } from "./postsActionTypes.js";

export const getPosts = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};

export const createPost = (payload, meta) => {
  return {
    payload,
    meta,
    type: CREATE_POST_REQUEST
  };
};
