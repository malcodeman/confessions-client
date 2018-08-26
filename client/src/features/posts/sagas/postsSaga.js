import { call, put, takeLatest } from "redux-saga/effects";

import axios from "../../../core/http";

import {
  GET_POSTS_REQUEST,
  GET_POSTS_FAILURE,
  GET_POSTS_SUCCESS
} from "../actions/postsActionTypes.js";

const getPostsApi = () => {
  return axios.get(`/posts`);
};

function* getPosts() {
  try {
    const data = yield call(getPostsApi);
    yield put({ type: GET_POSTS_SUCCESS, payload: data.data });
  } catch (error) {
    yield put({ type: GET_POSTS_FAILURE, error });
  }
}

const saga = function*() {
  yield takeLatest(GET_POSTS_REQUEST, getPosts);
};

export default saga;
