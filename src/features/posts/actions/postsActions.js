import {
  GET_POSTS_REQUEST,
  CREATE_POST_REQUEST,
  INITIALIZE_WEB_SOCKETS_CHANNEL
} from "./postsActionTypes.js";

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

export const initializeWsChannel = () => {
  return {
    type: INITIALIZE_WEB_SOCKETS_CHANNEL
  };
};
