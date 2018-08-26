import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE
} from "../actions/postsActionTypes.js";

const initialState = {
  posts: [],
  loading: true,
  error: true
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        loading: false,
        error: false
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        error: true,
        loading: false
      };
    default:
      return state;
  }
};
