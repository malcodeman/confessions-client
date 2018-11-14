import { combineReducers } from "redux";

import postsReducer from "../../features/posts/reducers/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer
});

export default rootReducer;
