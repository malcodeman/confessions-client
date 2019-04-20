import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  WEBSOCKET_MESSAGE_RECEIVED
} from "../actions/postsActionTypes.js";

const initialState = {
  posts: [],
  loading: false,
  error: false
};

export default (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case GET_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
        error: false
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
        loading: false,
        error: true
      };
    case WEBSOCKET_MESSAGE_RECEIVED:
      return {
        ...state,
        posts: [JSON.parse(action.payload), ...state.posts]
      };
    default:
      return state;
  }
};
