import {
  GET_POSTS_REQUEST,
  GET_POSTS_SUCCESS,
  GET_POSTS_FAILURE,
  CREATE_POST_SUCCESS
} from "../actions/postsActionTypes.js";

const initialState = {
  posts: [],
  page: 0,
  limit: 24,
  totalItemCount: 0,
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
        posts: [...state.posts, ...action.payload.posts],
        page: action.payload.pagination.next.page,
        totalItemCount: action.payload.pagination.total_item_count,
        loading: false,
        error: false
      };
    case GET_POSTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: true
      };
    case CREATE_POST_SUCCESS:
      return {
        ...state,
        posts: [action.payload, ...state.posts]
      };
    default:
      return state;
  }
};
