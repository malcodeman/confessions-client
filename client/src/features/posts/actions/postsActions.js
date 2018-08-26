import { GET_POSTS_REQUEST } from "./postsActionTypes.js";

export const getPosts = () => {
  return {
    type: GET_POSTS_REQUEST
  };
};
