import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import postsReducer from "../../features/posts/reducers/postsReducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  router: routerReducer
});

export default rootReducer;
